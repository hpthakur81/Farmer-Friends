# Farmer Friends

**Growing Together, Farming Better.**

A static informational website for farmers, built with the MERN stack (MongoDB optional).

## Folder Structure

```
farmer-friends/
├── client/               React + Vite frontend
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/   Navbar, Footer, ServiceCard
│   │   ├── pages/        Home, About, Services, Gallery, Contact
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
├── server/               Node.js + Express backend
│   ├── server.js
│   ├── package.json
│   └── .env.example
└── README.md
```

## Requirements

- Node.js 18 or newer
- VS Code (recommended)

## Setup and Run

Open the project in VS Code and use two terminals.

**Terminal 1: Backend**

```bash
cd server
npm install
cp .env.example .env     # on Windows: copy .env.example .env
npm run dev
```

The server runs at http://localhost:5000. Check http://localhost:5000/api/health

**Terminal 2: Frontend**

```bash
cd client
npm install
npm run dev
```

Open http://localhost:5173 in your browser.

## Optional MongoDB Setup

1. Install MongoDB locally, or create a free cluster on MongoDB Atlas.
2. Put the connection string in `server/.env`:
   ```
   MONGO_URI=mongodb://127.0.0.1:27017/farmer-friends
   ```
3. Restart the backend. The `/api/health` response will show `"database": "connected"`.

If MongoDB is not set up, the backend still runs and the website works normally.

## How Frontend and Backend Communicate

The React app (port 5173) calls `/api/health` from the footer. Vite's dev proxy (set in `client/vite.config.js`) forwards `/api` requests to the Express server on port 5000. The Express server responds with JSON, and the footer shows whether the backend is online. If the backend is off, the rest of the site still works.

## Notes

- The contact form validates inputs and shows a success message. It does not send email, because no email service is configured.
- Images are loaded from Unsplash. Replace the URLs in the page files if you want your own pictures.
- Contact details are placeholders. Update them in `Footer.jsx` and `Contact.jsx`.
