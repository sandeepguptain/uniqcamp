const nodemailer = require("nodemailer");

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(body) {
  const errors = [];
  if (!body?.name?.trim()) errors.push("name is required");
  if (!body?.email?.trim()) errors.push("email is required");
  else if (!emailRegex.test(body.email)) errors.push("email must be valid");
  if (!body?.school?.trim()) errors.push("school is required");
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
  const to = process.env.CONTACT_TO_EMAIL || "in.bebigupta@gmail.com";
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

  if (!transporter) {
    console.log("[Contact] No SMTP configured. Logging:", text);
    return;
  }

  const fromAddress = process.env.SMTP_FROM || process.env.SMTP_USER;
  const from = `UniqCamp <${fromAddress}>`;
  const replyToAddress = process.env.CONTACT_TO_EMAIL || "in.bebigupta@gmail.com";

  const thankYouText = `Hi ${payload.name},

Thank you for requesting a UniqCamp demo. We've received your request and will get back to you within 1–2 business days.

Here's what you shared:
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
  } catch (err) {
    console.error("[Contact] Thank-you send failed:", err.message);
  }

  await new Promise((r) => setTimeout(r, 500));

  try {
    await transporter.sendMail({
      from,
      to,
      replyTo: payload.email,
      subject: payload.subject || `UniqCamp demo request – ${payload.name} (${payload.school})`,
      text,
    });
  } catch (err) {
    console.error("[Contact] Notification send failed:", err.message);
  }
}

module.exports = async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ ok: false, error: "Method not allowed" });
  }

  try {
    const body = typeof req.body === "string" ? JSON.parse(req.body) : req.body || {};
    const errors = validate(body);
    if (errors.length) {
      return res.status(400).json({ ok: false, errors });
    }
    const payload = {
      name: String(body.name).trim(),
      email: String(body.email).trim(),
      school: String(body.school).trim(),
      phone: body.phone ? String(body.phone).trim() : undefined,
      message: body.message ? String(body.message).trim() : undefined,
      subject: body.subject,
    };
    await sendEmail(payload);
    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("[Contact] Error:", err.message);
    return res.status(500).json({ ok: false, error: "Failed to send request" });
  }
};
