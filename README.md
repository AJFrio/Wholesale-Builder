# Wholesale Builder

Wholesale Builder is a web application designed to streamline and enhance wholesale business operations by providing a modern, responsive, and efficient rack configuration UI.

This branch introduces a brand-new blue → green glassmorphic theme and a lightweight backend for emailing quotes.

## ✨ What's New (Blue/Green release)

1. 🌈 **Color Scheme Refresh**
   • Blue primary (#2563EB) with green gradient accents (#22C55E).
   • Glassmorphic UI (frosted panels, transparent backgrounds).

2. 📨 **Backend Email Service**
   • Express + Nodemailer server (`/server`).
   • `/api/send-quote` endpoint forwards configurator data to your sales inbox.
   • Environment-driven SMTP so you can plug Mailtrap, SendGrid, SES, etc.

3. ⚙️ **Quote Action**
   • "Request Quote" button prompts for your email, calls backend and shows status.

## 🛠️ Getting Started

### Prerequisites
• Node 18+ (for optional backend)  
• npm or yarn

### Frontend
```bash
npm install
npm run dev
```

Environment (optional): Create a `.env` file in project root to expose backend URL:
```
VITE_API_URL=http://localhost:8080
```

### Backend
```
cd server
npm install
npm run dev
```
See `server/README.md` for SMTP env vars.

## 📂 Project Structure (excerpt)
```
├─ src/                # React app
├─ server/             # Express backend
│  ├─ index.js         # Entry
│  └─ README.md        # Setup
└─ tailwind.config.js  # Theme with custom colors
```

## License
MIT
