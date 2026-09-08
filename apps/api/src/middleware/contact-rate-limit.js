import rateLimit from 'express-rate-limit';

/**
 * Strict rate limiter for the contact form endpoint.
 * 5 submissions per IP per 15 minutes to prevent spam.
 */
export const contactRateLimit = rateLimit({
	windowMs: 15 * 60 * 1000,
	max: 5,
	standardHeaders: true,
	legacyHeaders: false,
	message: {
		error: 'Too many contact requests from this IP. Please try again after 15 minutes.',
	},
	validate: { trustProxy: false },
});
