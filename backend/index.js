const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// API routes
app.use('/api', require('./routes/api'));

// In production, serve the frontend from dist when running locally via server.js
if (process.env.NODE_ENV === 'production' && process.env.VERCEL !== '1') {
  const distPath = path.join(__dirname, '../dist');
  app.use(express.static(distPath));
  app.get('*', (req, res) => {
    res.sendFile(path.join(distPath, 'index.html'));
  });
}

// Export for Vercel (do not listen here)
module.exports = app;
