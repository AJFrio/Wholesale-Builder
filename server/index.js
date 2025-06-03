import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import nodemailer from 'nodemailer'

// Load environment variables
dotenv.config()

const app = express()
const PORT = process.env.PORT || 8080

app.use(cors())
app.use(express.json({ limit: '1mb' }))

// Basic health check
app.get('/api/health', (_, res) => {
  res.json({ status: 'ok' })
})

// Endpoint to send quote email
app.post('/api/send-quote', async (req, res) => {
  try {
    const { customerEmail, payload } = req.body
    if (!customerEmail || !payload) {
      return res.status(400).json({ error: 'Missing customerEmail or payload' })
    }

    // Configure transport – using Mailtrap as default for safe testing.
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'sandbox.smtp.mailtrap.io',
      port: process.env.SMTP_PORT || 587,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    const mailOptions = {
      from: process.env.MAIL_FROM || 'no-reply@wholesale-builder.com',
      to: process.env.MAIL_TO || 'sales@wholesale-builder.com',
      replyTo: customerEmail,
      subject: 'New Rack Configurator Quote Request',
      html: `<pre style="font-size:14px">${JSON.stringify(payload, null, 2)}</pre>`
    }

    await transporter.sendMail(mailOptions)

    res.json({ status: 'sent' })
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Failed to send email' })
  }
})

app.listen(PORT, () => console.log(`Backend running on port ${PORT}`))
