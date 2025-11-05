import nodemailer from "nodemailer";

export default async function handler(req, res) {
  // Add CORS headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

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
  const transporter = nodemailer.createTransporter({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD
    }
  });

  const mailOptions = {
    from: process.env.GMAIL_USER,
    to: process.env.GMAIL_USER,
    subject: `Message From ${firstName} ${lastName} - Website Contact`,
    text: `You received a new message from your website contact form:\n\nFrom: ${firstName} ${lastName}\nEmail: ${email}\n\nMessage:\n${message}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px;">
        <h2 style="color: #333;">New Website Contact Message</h2>
        <div style="background: #f5f5f5; padding: 20px; border-radius: 8px;">
          <p><strong>From:</strong> ${firstName} ${lastName}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Message:</strong></p>
          <div style="background: white; padding: 15px; border-radius: 4px; margin-top: 10px;">
            ${message}
          </div>
        </div>
        <p style="margin-top: 20px; color: #666; font-size: 12px;">
          This message was sent from your website contact form.
        </p>
      </div>
    `,
    replyTo: email
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, info });
  } catch (err) {
    console.error('Email error:', err);
    res.status(500).json({ error: "Email send failed", details: err?.message || 'Unknown error' });
  }
}
