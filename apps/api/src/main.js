import './env.js';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

import routes from './routes/index.js';
import { errorMiddleware } from './middleware/error.js';
import { globalRateLimit } from './middleware/global-rate-limit.js';
import logger from './utils/logger.js';
import { BodyLimit } from './constants/common.js';
import { verifyMailer } from './utils/mailer.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distPath = path.resolve(__dirname, '../../web/dist');

const app = express();

app.set('trust proxy', process.env.NODE_ENV === 'production' ? 1 : false);

process.on('uncaughtException', (error) => {
	logger.error('Uncaught exception:', error);
});
  
process.on('unhandledRejection', (reason, promise) => {
	logger.error('Unhandled rejection at:', promise, 'reason:', reason);
});

process.on('SIGINT', async () => {
	logger.info('Interrupted');
	process.exit(0);
});

process.on('SIGTERM', async () => {
	logger.info('SIGTERM signal received');

	await new Promise(resolve => setTimeout(resolve, 3000));

	logger.info('Exiting');
	process.exit();
});

// Configure Helmet with a conservative Content Security Policy and other security headers
const cspDirectives = {
	defaultSrc: ["'self'"],
	scriptSrc: ["'self'"],
	styleSrc: ["'self'", "'unsafe-inline'"],
	imgSrc: ["'self'", 'data:', 'https://images.unsplash.com', 'https://horizons-cdn.hostinger.com', 'https://images.dmca.com', 'https://via.placeholder.com'],
	connectSrc: ["'self'", 'http://localhost:3000', 'ws://localhost:3000'],
	frameAncestors: ["'none'"],
	baseUri: ["'self'"],
	formAction: ["'self'"],
};

app.disable('x-powered-by');

app.use(helmet({
	contentSecurityPolicy: {
		directives: cspDirectives,
	},
	crossOriginOpenerPolicy: { policy: 'same-origin' },
	crossOriginResourcePolicy: { policy: 'same-site' },
}));

// HSTS in production
app.use((req, res, next) => {
	if (process.env.NODE_ENV === 'production') {
		res.setHeader('Strict-Transport-Security', 'max-age=63072000; includeSubDomains; preload');
	}
	next();
});

const allowedCorsOrigins = (process.env.CORS_ORIGIN || '')
	.split(',')
	.map((origin) => origin.trim())
	.filter(Boolean);

const corsOptions = {
	origin: (origin, callback) => {
		if (!origin || allowedCorsOrigins.includes(origin)) {
			return callback(null, true);
		}
		return callback(new Error('Origin is not allowed by CORS'));
	},
	credentials: true,
};

app.use((req, res, next) => {
	const origin = req.get('origin');
	if (origin) {
		try {
			if (new URL(origin).host === req.get('host')) return next();
		} catch {
			return next(new Error('Origin is not allowed by CORS'));
		}
	}
	return cors(corsOptions)(req, res, next);
});
app.use(morgan('combined'));
app.use(globalRateLimit);
app.use(express.json({
	limit: BodyLimit,
}));
app.use(express.urlencoded({ 
	extended: true,
	limit: BodyLimit,
}));

app.use('/hcgi/api', routes());

app.get('/health', (req, res) => {
	res.json({ status: 'ok' });
});

if (!fs.existsSync(distPath)) {
	app.get('/', (req, res) => {
		res.send('Groish API is running');
	});
}

// Dev proxy to Vite dev server on port 3000 if it's running
app.use(async (req, res, next) => {
	if (req.path.startsWith('/hcgi/api')) {
		return next();
	}
	try {
		const targetUrl = `http://localhost:3000${req.originalUrl}`;
		const controller = new AbortController();
		const id = setTimeout(() => controller.abort(), 1000);
		
		const response = await fetch(targetUrl, {
			method: req.method,
			headers: req.headers,
			signal: controller.signal,
			duplex: req.body ? 'half' : undefined
		});
		clearTimeout(id);
		
		res.status(response.status);
		response.headers.forEach((value, key) => {
			if (key.toLowerCase() !== 'content-security-policy') {
				res.setHeader(key, value);
			}
		});
		const body = await response.arrayBuffer();
		return res.send(Buffer.from(body));
	} catch (e) {
		next();
	}
});

// Serve static assets from dist folder if it exists
if (fs.existsSync(distPath)) {
	logger.info(`Serving static files from ${distPath}`);
	app.use(express.static(distPath));
}

// Wildcard fallback for React routing (only if dist exists)
if (fs.existsSync(distPath)) {
	app.get('/{*splat}', (req, res, next) => {
		if (req.method === 'GET' && req.accepts('html')) {
			return res.sendFile(path.join(distPath, 'index.html'));
		}
		next();
	});
}

app.use(errorMiddleware);

app.use((req, res) => {
	res.status(404).json({ error: 'Route not found' });
});

const port = process.env.PORT || 3001;

app.listen(port, () => {
	logger.info(`🚀 API Server running on http://localhost:${port}`);
	verifyMailer();
});

export default app;