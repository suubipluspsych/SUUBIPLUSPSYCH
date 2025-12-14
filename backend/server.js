const express = require('express');
const path = require('path');

const app = express();

// Serve frontend folder
app.use(express.static(path.join(__dirname, '../frontend')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/index.html'), (err) => {
    if (err) {
      console.error("Error serving index.html:", err);
      res.status(500).send("Something went wrong.");
    }
  });
});

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'SUUBI PLUS PSYCH LIVE' });
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

