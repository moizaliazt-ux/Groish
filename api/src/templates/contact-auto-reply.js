/**
 * Auto-reply email sent to the customer / prospect.
 */
const escapeHtml = (value) => String(value ?? '').replace(/[&<>'"]/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' })[character]);

export function contactAutoReplyHtml({ name }) {
	return `
<!DOCTYPE html>
<html lang="en">
<head><meta charset="utf-8"></head>
<body style="margin:0;padding:0;font-family:'Segoe UI',Tahoma,Geneva,Verdana,sans-serif;background:#f4f4f7;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f7;padding:32px 0;">
  <tr><td align="center">
    <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:8px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.07);">
      <!-- Header -->
      <tr>
        <td style="background:linear-gradient(135deg,#8c2a8d 0%,#6b1d6e 100%);padding:36px 32px;text-align:center;">
          <h1 style="margin:0;color:#ffffff;font-size:24px;font-weight:700;letter-spacing:0.5px;">Groish</h1>
          <p style="margin:8px 0 0;color:rgba(255,255,255,0.85);font-size:14px;">Technology, operations, and growth services</p>
        </td>
      </tr>
      <!-- Body -->
      <tr>
        <td style="padding:36px 32px;">
          <h2 style="margin:0 0 16px;font-size:20px;color:#1e293b;">Thank You, ${escapeHtml(name)}!</h2>
          <p style="margin:0 0 18px;font-size:15px;color:#475569;line-height:1.7;">
            We've received your inquiry and appreciate you reaching out to us. A member of our team will review your message and get back to you within <strong>1 business day</strong>.
          </p>
          <p style="margin:0 0 18px;font-size:15px;color:#475569;line-height:1.7;">
            In the meantime, here's what sets us apart:
          </p>

          <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
            <tr>
              <td style="padding:10px 14px;background:#faf5ff;border-left:3px solid #8c2a8d;border-radius:4px;margin-bottom:8px;">
                <span style="font-size:14px;color:#334155;">✓ 98% First-Pass Clean Claims Rate</span>
              </td>
            </tr>
            <tr><td style="height:8px;"></td></tr>
            <tr>
              <td style="padding:10px 14px;background:#faf5ff;border-left:3px solid #8c2a8d;border-radius:4px;">
                <span style="font-size:14px;color:#334155;">✓ AR Recovery Within 24 Days</span>
              </td>
            </tr>
            <tr><td style="height:8px;"></td></tr>
            <tr>
              <td style="padding:10px 14px;background:#faf5ff;border-left:3px solid #8c2a8d;border-radius:4px;">
                <span style="font-size:14px;color:#334155;">✓ 30% Revenue Improvement</span>
              </td>
            </tr>
            <tr><td style="height:8px;"></td></tr>
            <tr>
              <td style="padding:10px 14px;background:#faf5ff;border-left:3px solid #8c2a8d;border-radius:4px;">
                <span style="font-size:14px;color:#334155;">✓ Complimentary Provider Credentialing</span>
              </td>
            </tr>
          </table>

          <p style="margin:0 0 8px;font-size:15px;color:#475569;line-height:1.7;">
            Need immediate assistance? Email us directly:
          </p>
          <p style="margin:0 0 24px;">
            <a href="mailto:info@groish.com" style="color:#8c2a8d;font-size:18px;font-weight:600;text-decoration:none;">info@groish.com</a>
          </p>

          <p style="margin:0;font-size:15px;color:#475569;">
            Warm regards,<br>
            <strong style="color:#1e293b;">The Groish Team</strong>
          </p>
        </td>
      </tr>
      <!-- Footer -->
      <tr>
        <td style="background:#f8fafc;padding:22px 32px;text-align:center;">
          <p style="margin:0 0 6px;font-size:12px;color:#94a3b8;">Groish — Building useful businesses and technology</p>
          <p style="margin:0;font-size:11px;color:#cbd5e1;">
            This is an automated response. Please do not reply directly to this email.<br>
            © ${new Date().getFullYear()} Groish. All rights reserved.
          </p>
        </td>
      </tr>
    </table>
  </td></tr>
</table>
</body>
</html>`;
}
