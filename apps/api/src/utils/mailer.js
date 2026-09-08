import nodemailer from 'nodemailer';
import logger from './logger.js';

const smtpPort = Number(process.env.SMTP_PORT) || 465;

const transporter = nodemailer.createTransport({
	host: process.env.SMTP_HOST,
	port: smtpPort,
	secure: smtpPort === 465,
	auth: {
		user: process.env.SMTP_USER,
		pass: process.env.SMTP_PASS,
	},
});

/**
 * Verify SMTP connection on startup (non-blocking).
 */
export async function verifyMailer() {
	try {
		if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
			throw new Error('SMTP_HOST, SMTP_USER, and SMTP_PASS must be configured');
		}
		await transporter.verify();
		logger.info('SMTP connection verified successfully');
	} catch (err) {
		logger.error('SMTP connection failed — emails will not be sent:', err.message);
	}
}

export default transporter;
