import nodemailer from "nodemailer";

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method Not Allowed" });
    return;
  }

  const { firstName, lastName, email, message } = req.body;
  if (
    !firstName || !lastName || !email || !message ||
    typeof firstName !== "string" ||
    typeof lastName !== "string" ||
    typeof email !== "string" ||
    typeof message !== "string"
  ) {
    res.status(400).json({ error: "Missing or invalid fields" });
    return;
  }

  // Use Gmail SMTP with app password from environment
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD
    }
  });

  const mailOptions = {
    from: 'nickshahbaz135@gmail.com',
    to: "nickshahbaz135@gmail.com",
    subject: "Message From Web",
    text: `From: ${firstName} ${lastName} (${email})\n\nMessage: ${message}`,
    html: `
      <h3>New Message From Website</h3>
      <p><strong>From:</strong> ${firstName} ${lastName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `,
    replyTo: email
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, info });
  } catch (err) {
    console.error('Email error:', err);
    res.status(500).json({ error: "Email send failed", details: err });
  }
}
