/*
Backend server to handle email sending for the configurator data.
Uses Express, Nodemailer, and Body-Parser for parsing JSON requests.
Ensure to define environment variables in a .env file for email credentials.

Required environment variables:
- EMAIL_SERVICE: Optional email service provider.
- EMAIL_HOST: SMTP host
- EMAIL_PORT: SMTP port
- EMAIL_USER: email user
- EMAIL_PASS: email password
- EMAIL_TO: email address to send configuration data
*/

import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Define the /send-email endpoint
app.post('/send-email', async (req, res) => {
  const configuratorData = req.body;

  // Create the transporter based on SMTP settings
  let transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: process.env.EMAIL_PORT == 465, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  // Prepare email content
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_TO,
    subject: 'Configurator Data Submission',
    text: JSON.stringify(configuratorData, null, 2),
    html: `<pre>${JSON.stringify(configuratorData, null, 2)}</pre>`
  };

  try {
    let info = await transporter.sendMail(mailOptions);
    console.log('Email sent: %s', info.messageId);
    res.status(200).json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ success: false, message: 'Error sending email', error: error.toString() });
  }
});

app.get('/', (req, res) => {
  res.send('Backend server is running');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
