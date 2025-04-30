const express = require('express');
const fs = require('fs');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const FILE = 'messages.json';

// Load or create file
if (!fs.existsSync(FILE)) fs.writeFileSync(FILE, '[]');

// GET messages
app.get('/messages', (req, res) => {
  const messages = JSON.parse(fs.readFileSync(FILE));
  res.json(messages);
});

// POST message
app.post('/messages', (req, res) => {
  const messages = JSON.parse(fs.readFileSync(FILE));
  messages.push(req.body);
  fs.writeFileSync(FILE, JSON.stringify(messages, null, 2));
  res.status(201).json({ success: true });
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));
