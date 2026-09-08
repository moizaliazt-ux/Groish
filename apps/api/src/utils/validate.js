/**
 * Contact-form server-side validation & sanitisation.
 */

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const LINK_RE = /https?:\/\/|www\./i;

/** Strip HTML tags */
function sanitize(str) {
	if (typeof str !== 'string') return '';
	return str.replace(/<[^>]*>/g, '').trim();
}

/**
 * Returns an array of error messages.  Empty array = valid.
 */
export function validateContactForm(body) {
	const errors = [];

	const name = sanitize(body.name);
	const email = sanitize(body.email);
	const company = sanitize(body.company);
	const service = sanitize(body.service);
	const message = sanitize(body.message);

	// Required fields
	if (!name || name.length < 2 || name.length > 100) {
		errors.push('Name must be 2–100 characters.');
	}
	if (!email || !EMAIL_RE.test(email)) {
		errors.push('A valid email address is required.');
	}
	if (company.length > 100) {
		errors.push('Company name must be 100 characters or fewer.');
	}
	if (!service || service.length > 100) {
		errors.push('A valid service selection is required.');
	}

	if (!message || message.length < 10 || message.length > 2000) {
		errors.push('Message must be 10–2000 characters.');
	}

	// Anti-spam: reject messages full of links
	if (LINK_RE.test(message)) {
		errors.push('Links are not allowed in the message.');
	}

	// Honeypot — if the hidden field was filled, it's a bot
	if (body._hp_website && body._hp_website.length > 0) {
		errors.push('Spam detected.');
	}

	return {
		errors,
		sanitized: { name, email, company, service, message },
	};
}
