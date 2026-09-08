/**
 * Auto-reply email sent to the customer / prospect.
 */
const escapeHtml = (value) => String(value ?? '').replace(/[&<>'"]/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' })[character]);

export function contactAutoReplyHtml({ name, service }) {
	return `
<!DOCTYPE html>
<html lang="en">
<head><meta charset="utf-8"></head>
<body style="margin:0;padding:0;font-family:'Segoe UI',Tahoma,Geneva,Verdana,sans-serif;background:#f1f5f9;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#f1f5f9;padding:32px 0;">
  <tr><td align="center">
    <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:8px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.07);">
      <!-- Header -->
      <tr>
        <td style="background:linear-gradient(135deg,#020617 0%,#0f172a 62%,#155e75 100%);padding:36px 32px;text-align:center;">
          <h1 style="margin:0;color:#ffffff;font-size:24px;font-weight:700;letter-spacing:0.5px;">Groish</h1>
          <p style="margin:8px 0 0;color:#a5f3fc;font-size:14px;">Technology, operations, and growth services</p>
        </td>
      </tr>
      <!-- Body -->
      <tr>
        <td style="padding:36px 32px;">
          <h2 style="margin:0 0 16px;font-size:20px;color:#1e293b;">Thank You, ${escapeHtml(name)}!</h2>
          <p style="margin:0 0 18px;font-size:15px;color:#475569;line-height:1.7;">
            We've received your inquiry about <strong style="color:#0891b2;">${escapeHtml(service)}</strong>. A member of our team will review your requirements and get back to you within <strong>1 business day</strong>.
          </p>
          <p style="margin:0 0 18px;font-size:15px;color:#475569;line-height:1.7;">
            We'll review your goals, match them with the right GROISH team, and follow up with practical next steps for your project.
          </p>

          <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
            <tr>
              <td style="padding:10px 14px;background:#ecfeff;border-left:3px solid #06b6d4;border-radius:4px;margin-bottom:8px;">
                <span style="font-size:14px;color:#334155;">✓ Your selected service: ${escapeHtml(service)}</span>
              </td>
            </tr>
            <tr><td style="height:8px;"></td></tr>
            <tr>
              <td style="padding:10px 14px;background:#ecfeff;border-left:3px solid #06b6d4;border-radius:4px;">
                <span style="font-size:14px;color:#334155;">✓ Context-first recommendations</span>
              </td>
            </tr>
            <tr><td style="height:8px;"></td></tr>
            <tr>
              <td style="padding:10px 14px;background:#ecfeff;border-left:3px solid #06b6d4;border-radius:4px;">
                <span style="font-size:14px;color:#334155;">✓ Specialized team alignment</span>
              </td>
            </tr>
            <tr><td style="height:8px;"></td></tr>
            <tr>
              <td style="padding:10px 14px;background:#ecfeff;border-left:3px solid #06b6d4;border-radius:4px;">
                <span style="font-size:14px;color:#334155;">✓ Clear next steps for your project</span>
              </td>
            </tr>
          </table>

          <p style="margin:0 0 8px;font-size:15px;color:#475569;line-height:1.7;">
            Need immediate assistance? Email us directly:
          </p>
          <p style="margin:0 0 24px;">
            <a href="mailto:info@groish.com" style="color:#0891b2;font-size:18px;font-weight:600;text-decoration:none;">info@groish.com</a>
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
