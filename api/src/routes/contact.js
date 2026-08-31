import { Router } from 'express';
import transporter from '../utils/mailer.js';
import { validateContactForm } from '../utils/validate.js';
import { contactNotificationHtml } from '../templates/contact-notification.js';
import { contactAutoReplyHtml } from '../templates/contact-auto-reply.js';
import { contactRateLimit } from '../middleware/contact-rate-limit.js';
import logger from '../utils/logger.js';

const router = Router();

/**
 * POST /hcgi/api/contact
 *
 * Anti-spam layers:
 *   1. contactRateLimit — 5 req / 15 min per IP
 *   2. Honeypot field (_hp_website) — bots fill hidden fields
 *   3. Timestamp check — form must be open ≥ 3 seconds (bots submit instantly)
 *   4. Server-side validation — rejects malformed data & messages with links
 */
router.post('/', contactRateLimit, async (req, res) => {
	try {
		// ── Anti-bot: timestamp check ──────────────────────────
		const submittedAt = Number(req.body._form_ts);
		if (submittedAt) {
			const elapsed = Date.now() - submittedAt;
			if (elapsed < 3000) {
				// Human can't fill a form in under 3 seconds
				logger.warn('Contact form rejected: submitted too fast', { elapsed, ip: req.ip });
				return res.status(200).json({ success: true }); // fake success to confuse bots
			}
		}

		// ── Validate & sanitise ───────────────────────────────
		const { errors, sanitized } = validateContactForm(req.body);

		if (errors.length > 0) {
			// If honeypot triggered, return fake success
			if (errors.includes('Spam detected.')) {
				logger.warn('Contact form rejected: honeypot triggered', { ip: req.ip });
				return res.status(200).json({ success: true });
			}
			return res.status(400).json({ errors });
		}

		const { name, email } = sanitized;
		const mailTo = process.env.MAIL_TO || process.env.SMTP_USER;
		const smtpUser = process.env.SMTP_USER;

		await transporter.sendMail({
			from: `"Groish Website" <${smtpUser}>`,
			to: mailTo,
			replyTo: email,
			subject: `New Groish inquiry from ${name}`,
			html: contactNotificationHtml(sanitized),
		});

		logger.info(`Contact notification email sent to ${mailTo} from ${email}`);

		// ── Send auto-reply to the customer ──────────────────
		await transporter.sendMail({
			from: `"Groish" <${smtpUser}>`,
			to: email,
			subject: 'Thank you for contacting Groish!',
			html: contactAutoReplyHtml({ name }),
		});

		logger.info(`Auto-reply sent to ${email}`);

		return res.status(200).json({ success: true });

	} catch (err) {
		logger.error('Contact form error:', err);
		return res.status(500).json({
			error: 'We could not process your request. Please try again later or call us at +1 (609) 793-0400.',
		});
	}
});

export default router;
