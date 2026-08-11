import nodemailer from "nodemailer";

export const runtime = "nodejs";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function clean(value) {
  return typeof value === "string" ? value.trim() : "";
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(request) {
  let body;

  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  const name = clean(body?.name);
  const email = clean(body?.email);
  const subject = clean(body?.subject);
  const message = clean(body?.message);
  const website = clean(body?.website);

  // Silently accept submissions caught by the hidden honeypot field.
  if (website) {
    return Response.json({ success: true });
  }

  if (!name || !email || !subject || !message) {
    return Response.json(
      { error: "All fields are required." },
      { status: 400 },
    );
  }

  if (!EMAIL_PATTERN.test(email)) {
    return Response.json(
      { error: "Enter a valid email address." },
      { status: 400 },
    );
  }

  if (
    name.length > 120 ||
    email.length > 254 ||
    subject.length > 200 ||
    message.length > 5000
  ) {
    return Response.json(
      { error: "One or more fields are too long." },
      { status: 400 },
    );
  }

  const emailUser = process.env.EMAIL_USER;
  const emailAppPassword = process.env.EMAIL_APP_PASSWORD?.replace(/\s/g, "");

  if (!emailUser || !emailAppPassword) {
    console.error("[contact] Gmail SMTP credentials are not configured.");
    return Response.json(
      { error: "Email service is not configured." },
      { status: 503 },
    );
  }

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: emailUser,
      pass: emailAppPassword,
    },
  });

  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeSubject = escapeHtml(subject);
  const safeMessage = escapeHtml(message).replaceAll("\n", "<br />");

  try {
    const info = await transporter.sendMail({
      from: `Muhammad Ali Portfolio <${emailUser}>`,
      to: "ha0350731@gmail.com",
      replyTo: email,
      subject: `Portfolio contact: ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`,
      html: `
        <h2>New portfolio contact message</h2>
        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Subject:</strong> ${safeSubject}</p>
        <p><strong>Message:</strong><br />${safeMessage}</p>
      `,
    });

    return Response.json({ success: true, id: info.messageId });
  } catch (error) {
    console.error("[contact] Gmail SMTP delivery failed:", error);
    return Response.json(
      { error: "Unable to send your message right now. Please try again." },
      { status: 502 },
    );
  }
}
