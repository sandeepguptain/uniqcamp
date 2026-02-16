import "dotenv/config";
import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";

const app = express();
const PORT = process.env.PORT ?? 3007;

app.use(cors({ origin: true }));
app.use(express.json());

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(body) {
  const errors = [];
  if (!body.name?.trim()) errors.push("name is required");
  if (!body.email?.trim()) errors.push("email is required");
  else if (!emailRegex.test(body.email)) errors.push("email must be valid");
  if (!body.school?.trim()) errors.push("school is required");
  return errors;
}

function createTransporter() {
  const hasSmtp =
    process.env.SMTP_HOST &&
    process.env.SMTP_PORT &&
    process.env.SMTP_USER &&
    process.env.SMTP_PASS;
  if (!hasSmtp) return null;
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: process.env.SMTP_SECURE === "true",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
}

async function sendEmail(payload) {
  const to = process.env.CONTACT_TO_EMAIL ?? "in.bebigupta@gmail.com";
  const transporter = createTransporter();

  const text = [
    `Name: ${payload.name}`,
    `Email: ${payload.email}`,
    `School/Organization: ${payload.school}`,
    payload.phone ? `Phone: ${payload.phone}` : "",
    payload.message ? `\nMessage:\n${payload.message}` : "",
  ]
    .filter(Boolean)
    .join("\n");

  if (transporter) {
    const fromAddress = process.env.SMTP_FROM ?? process.env.SMTP_USER;
    const from = `UniqCamp <${fromAddress}>`;
    const replyToAddress = process.env.CONTACT_TO_EMAIL ?? "in.bebigupta@gmail.com";

    const thankYouText = `Hi ${payload.name},

Thank you for requesting a UniqCamp demo. We've received your request and will get back to you within 1–2 business days.

Here’s what you shared:
- School/Organization: ${payload.school}
${payload.phone ? `- Phone: ${payload.phone}` : ""}

If you have any questions in the meantime, just reply to this email.

Best regards,
The UniqCamp Team`;

    try {
      await transporter.sendMail({
        from,
        to: payload.email,
        replyTo: replyToAddress,
        subject: "We received your UniqCamp demo request",
        text: thankYouText,
      });
      console.log("[Contact] Thank-you email sent to", payload.email);
    } catch (err) {
      console.error("[Contact] Failed to send thank-you to sender:", payload.email, err.message || err);
    }

    await new Promise((r) => setTimeout(r, 500));

    try {
      await transporter.sendMail({
        from,
        to,
        replyTo: payload.email,
        subject: payload.subject ?? `UniqCamp demo request – ${payload.name} (${payload.school})`,
        text,
      });
      console.log("[Contact] Notification sent to", to);
    } catch (err) {
      console.error("[Contact] Failed to send notification to", to, err.message || err);
    }
  } else {
    console.log("[Contact] No SMTP configured (set SMTP_* in .env). Logging request:");
    console.log(text);
    console.log("---");
  }
}

app.post("/api/contact", async (req, res) => {
  try {
    const errors = validate(req.body);
    if (errors.length) {
      return res.status(400).json({ ok: false, errors });
    }
    const payload = {
      name: String(req.body.name).trim(),
      email: String(req.body.email).trim(),
      school: String(req.body.school).trim(),
      phone: req.body.phone ? String(req.body.phone).trim() : undefined,
      message: req.body.message ? String(req.body.message).trim() : undefined,
      subject: req.body.subject,
    };
    await sendEmail(payload);
    res.status(200).json({ ok: true });
  } catch (err) {
    console.error("[Contact] Error:", err.message || err);
    if (err.code === "EAUTH" || err.responseCode === 535) {
      console.error("[Contact] SMTP auth failed. For Gmail, use an App Password: https://myaccount.google.com/apppasswords");
    }
    res.status(500).json({ ok: false, error: "Failed to send request" });
  }
});

app.listen(PORT, () => {
  console.log(`Contact API running at http://localhost:${PORT}`);
});
