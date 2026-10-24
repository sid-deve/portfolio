/**
 * Server-only email helper using Resend.
 * Never import this in client components.
 */
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// Escape HTML entities to prevent XSS in email templates
function esc(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
    .replace(/\n/g, "<br/>");
}

export async function sendContactNotification(data: {
  name: string;
  email: string;
  subject: string;
  message: string;
  submittedAt: string;
}): Promise<{ ok: boolean; error?: string }> {
  const to = process.env.RESEND_NOTIFY_EMAIL ?? "yadavsid50k@gmail.com";
  const from = process.env.RESEND_FROM ?? "onboarding@resend.dev";

  try {
    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: data.email,
      subject: `📬 New contact: ${data.subject || "Portfolio enquiry"} — from ${data.name}`,
      html: `
        <!DOCTYPE html>
        <html lang="en">
        <head><meta charset="UTF-8"/><meta name="viewport" content="width=device-width,initial-scale=1"/></head>
        <body style="margin:0;padding:0;background:#0a0c18;font-family:system-ui,sans-serif;color:#e4e4e7;">
          <table width="100%" cellpadding="0" cellspacing="0" style="background:#0a0c18;padding:40px 20px;">
            <tr><td align="center">
              <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#12152a;border-radius:16px;border:1px solid rgba(255,255,255,0.1);overflow:hidden;">
                <!-- Header -->
                <tr>
                  <td style="background:linear-gradient(135deg,#7c3aed,#0ea5e9);padding:28px 32px;">
                    <p style="margin:0;font-size:12px;font-weight:700;letter-spacing:0.2em;text-transform:uppercase;color:rgba(255,255,255,0.8);">Portfolio Contact</p>
                    <h1 style="margin:8px 0 0;font-size:24px;font-weight:700;color:#fff;">New Message Received</h1>
                  </td>
                </tr>
                <!-- Body -->
                <tr>
                  <td style="padding:32px;">
                    <!-- From -->
                    <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;border-radius:12px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);overflow:hidden;">
                      <tr>
                        <td style="padding:16px 20px;">
                          <p style="margin:0 0 4px;font-size:11px;font-weight:600;letter-spacing:0.15em;text-transform:uppercase;color:#71717a;">From</p>
                          <p style="margin:0;font-size:16px;font-weight:600;color:#fff;">${esc(data.name)}</p>
                          <a href="mailto:${esc(data.email)}" style="color:#a78bfa;font-size:14px;text-decoration:none;">${esc(data.email)}</a>
                        </td>
                      </tr>
                    </table>
                    <!-- Subject -->
                    <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;border-radius:12px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);overflow:hidden;">
                      <tr>
                        <td style="padding:16px 20px;">
                          <p style="margin:0 0 4px;font-size:11px;font-weight:600;letter-spacing:0.15em;text-transform:uppercase;color:#71717a;">Subject</p>
                          <p style="margin:0;font-size:15px;color:#e4e4e7;">${esc(data.subject || "No subject")}</p>
                        </td>
                      </tr>
                    </table>
                    <!-- Message -->
                    <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;border-radius:12px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);overflow:hidden;">
                      <tr>
                        <td style="padding:16px 20px;">
                          <p style="margin:0 0 12px;font-size:11px;font-weight:600;letter-spacing:0.15em;text-transform:uppercase;color:#71717a;">Message</p>
                          <p style="margin:0;font-size:15px;line-height:1.7;color:#d4d4d8;">${esc(data.message)}</p>
                        </td>
                      </tr>
                    </table>
                    <!-- Reply CTA -->
                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td>
                          <a href="mailto:${esc(data.email)}?subject=Re: ${esc(data.subject || "Your enquiry")}"
                            style="display:inline-block;background:linear-gradient(135deg,#7c3aed,#0ea5e9);color:#fff;font-size:14px;font-weight:600;padding:12px 28px;border-radius:999px;text-decoration:none;">
                            Reply to ${esc(data.name)} →
                          </a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <!-- Footer -->
                <tr>
                  <td style="padding:20px 32px;border-top:1px solid rgba(255,255,255,0.06);">
                    <p style="margin:0;font-size:12px;color:#52525b;">
                      Submitted on ${esc(data.submittedAt)} · siddharthakumar.dev
                    </p>
                  </td>
                </tr>
              </table>
            </td></tr>
          </table>
        </body>
        </html>
      `,
    });

    if (error) {
      console.error("[mailer] Resend error:", error.message);
      return { ok: false, error: error.message };
    }

    return { ok: true };
  } catch (err) {
    const msg = err instanceof Error ? err.message : "Unknown email error";
    console.error("[mailer] Unexpected error:", msg);
    return { ok: false, error: msg };
  }
}
