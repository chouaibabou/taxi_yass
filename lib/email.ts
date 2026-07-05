import nodemailer from "nodemailer";

type SendEmailInput = {
  to: string;
  subject: string;
  html: string;
  replyTo?: string;
};

function getRequiredEnv(name: string) {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing email env var: ${name}`);
  }

  return value;
}

export async function sendEmail({ to, subject, html, replyTo }: SendEmailInput) {
  const host = getRequiredEnv("SMTP_HOST");
  const port = Number(getRequiredEnv("SMTP_PORT"));
  const user = getRequiredEnv("SMTP_USER");
  const pass = getRequiredEnv("SMTP_PASSWORD");
  const from = getRequiredEnv("EMAIL_FROM");

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass }
  });

  await transporter.sendMail({
    from,
    to,
    subject,
    html,
    replyTo
  });
}

export function rowsEmailTable(data: Record<string, unknown>) {
  return Object.entries(data)
    .filter(([, value]) => value !== undefined && value !== null && String(value).trim() !== "")
    .map(([key, value]) => `<tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:700">${key}</td><td style="padding:8px;border-bottom:1px solid #eee">${String(value)}</td></tr>`)
    .join("");
}
