/**
 * Internal notification email sent to the Groish team.
 */
const escapeHtml = (value) => String(value ?? '').replace(/[&<>'"]/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' })[character]);

export function contactNotificationHtml({ name, email, company, service, message }) {
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
        <td style="background:#1e293b;padding:28px 32px;">
          <h1 style="margin:0;color:#ffffff;font-size:22px;font-weight:600;">New Contact Form Submission</h1>
        </td>
      </tr>
      <!-- Body -->
      <tr>
        <td style="padding:32px;">
          <table width="100%" cellpadding="0" cellspacing="0" style="font-size:15px;color:#334155;">
            <tr>
              <td style="padding:10px 0;border-bottom:1px solid #e2e8f0;font-weight:600;width:180px;color:#64748b;">Name</td>
              <td style="padding:10px 0;border-bottom:1px solid #e2e8f0;">${escapeHtml(name)}</td>
            </tr>
            <tr>
              <td style="padding:10px 0;border-bottom:1px solid #e2e8f0;font-weight:600;color:#64748b;">Email</td>
              <td style="padding:10px 0;border-bottom:1px solid #e2e8f0;"><a href="mailto:${escapeHtml(email)}" style="color:#8c2a8d;">${escapeHtml(email)}</a></td>
            </tr>
              <td style="padding:10px 0;border-bottom:1px solid #e2e8f0;font-weight:600;color:#64748b;">Company</td>
              <td style="padding:10px 0;border-bottom:1px solid #e2e8f0;">${escapeHtml(company) || 'Not provided'}</td>
            </tr>
            <tr>
              <td style="padding:10px 0;border-bottom:1px solid #e2e8f0;font-weight:600;color:#64748b;">Service</td>
              <td style="padding:10px 0;border-bottom:1px solid #e2e8f0;">${escapeHtml(service)}</td>
            </tr>
            <tr>
              <td style="padding:10px 0;font-weight:600;color:#64748b;" valign="top">Message</td>
              <td style="padding:10px 0;line-height:1.6;">${escapeHtml(message).replace(/\n/g, '<br>')}</td>
            </tr>
          </table>
        </td>
      </tr>
      <!-- Footer -->
      <tr>
        <td style="background:#f8fafc;padding:18px 32px;text-align:center;font-size:12px;color:#94a3b8;">
          This email was generated automatically by the Groish website contact form.
        </td>
      </tr>
    </table>
  </td></tr>
</table>
</body>
</html>`;
}
