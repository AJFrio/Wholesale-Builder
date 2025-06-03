# Wholesale Builder Backend

Simple Express server exposing a /api/send-quote endpoint that uses Nodemailer to forward configurator data to your sales inbox.

## Environment variables

Create a `.env` file in the `server` folder with:

```
SMTP_HOST=sandbox.smtp.mailtrap.io
SMTP_PORT=587
SMTP_USER=YOUR_USERNAME
SMTP_PASS=YOUR_PASSWORD
MAIL_FROM=no-reply@wholesale-builder.com
MAIL_TO=sales@wholesale-builder.com
PORT=8080
```

Adjust to your real SMTP provider in production.

## Development

```
cd server
npm install
npm run dev
```
