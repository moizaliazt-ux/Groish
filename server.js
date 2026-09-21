import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Attempt to load full API server if present
const apiEntry = path.join(__dirname, 'apps/api/src/main.js');
let apiLoaded = false;

if (fs.existsSync(apiEntry)) {
  try {
    await import('./apps/api/src/main.js');
    apiLoaded = true;
  } catch (err) {
    console.error('⚠️ Failed to start API server, falling back to standalone static server:', err.message);
  }
}

if (!apiLoaded) {
  // Standalone fallback static server using native http (zero external dependencies required)
  const http = await import('http');
  const PORT = process.env.PORT || 3000;
  
  const possibleDistDirs = [
    path.join(__dirname, 'apps/web/dist'),
    path.join(__dirname, 'dist'),
    path.join(process.cwd(), 'apps/web/dist'),
    path.join(process.cwd(), 'dist'),
  ];
  const distDir = possibleDistDirs.find((d) => fs.existsSync(d)) || possibleDistDirs[0];

  const mimeTypes = {
    '.html': 'text/html; charset=UTF-8',
    '.js': 'text/javascript; charset=UTF-8',
    '.css': 'text/css; charset=UTF-8',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.webp': 'image/webp',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon',
    '.woff': 'font/woff',
    '.woff2': 'font/woff2',
    '.ttf': 'font/ttf',
    '.txt': 'text/plain; charset=UTF-8',
  };

  const server = http.createServer((req, res) => {
    let reqPath = req.url.split('?')[0];
    if (reqPath === '/') reqPath = '/index.html';
    
    let filePath = path.join(distDir, reqPath);

    fs.stat(filePath, (err, stats) => {
      if (err || !stats.isFile()) {
        filePath = path.join(distDir, 'index.html');
      }

      const ext = path.extname(filePath).toLowerCase();
      const contentType = mimeTypes[ext] || 'application/octet-stream';

      fs.readFile(filePath, (readErr, content) => {
        if (readErr) {
          res.writeHead(404, { 'Content-Type': 'text/plain', 'X-Powered-By': 'Hostinger Horizons' });
          res.end('404 Not Found');
          return;
        }

        let cacheControl = 'public, s-maxage=604800, max-age=0';
        if (ext === '.html') {
          cacheControl = 'no-cache, no-store, must-revalidate';
        } else if (ext === '.js' || ext === '.css') {
          cacheControl = 'public, max-age=31536000, immutable';
        } else if (['.jpg', '.jpeg', '.png', '.webp', '.gif', '.svg', '.ico'].includes(ext)) {
          cacheControl = 'public, max-age=2592000';
        }

        res.writeHead(200, {
          'Content-Type': contentType,
          'X-Powered-By': 'Hostinger Horizons',
          'Cache-Control': cacheControl,
        });
        res.end(content);
      });
    });
  });

  server.listen(PORT, () => {
    console.log(`🚀 Groish Web Server running on port ${PORT}`);
  });
}
