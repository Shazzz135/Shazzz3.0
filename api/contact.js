export default async function handler(req, res) {
  // Set CORS headers first
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Content-Type', 'application/json');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Only allow POST requests
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  try {
    // Import nodemailer dynamically
    const nodemailer = await import('nodemailer');
    
    // Log environment for debugging
    console.log('API called, env vars present:', {
      hasUser: !!process.env.GMAIL_USER,
      hasPassword: !!process.env.GMAIL_APP_PASSWORD
    });

    // Check environment variables
    if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
      return res.status(500).json({ 
        error: 'Server configuration error',
        details: 'Missing email credentials'
      });
    }

    // Validate request body
    const { firstName, lastName, email, message } = req.body || {};
    
    if (!firstName || !lastName || !email || !message) {
      return res.status(400).json({ 
        error: 'Missing required fields',
        required: ['firstName', 'lastName', 'email', 'message']
      });
    }

    // Create transporter with explicit configuration
    const transporter = nodemailer.default.createTransporter({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD.replace(/\s/g, '') // Remove any spaces
      }
    });

    // Configure email
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER,
      subject: `Website Contact: ${firstName} ${lastName}`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <div style="border-left: 3px solid #ccc; padding-left: 15px; margin: 10px 0;">
          ${message}
        </div>
      `,
      replyTo: email
    };

    // Send email
    const result = await transporter.sendMail(mailOptions);
    
    console.log('Email sent successfully:', result.messageId);
    
    res.status(200).json({
      success: true,
      message: 'Email sent successfully',
      messageId: result.messageId
    });

  } catch (error) {
    console.error('API Error:', error);
    
    res.status(500).json({
      error: 'Failed to send email',
      details: error.message,
      code: error.code || 'UNKNOWN_ERROR'
    });
  }
}
