const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, '../frontend')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/index.html'), function(err) {
    if (err) {
      console.log("Error serving index.html:", err);
      res.status(500).send("Something went wrong.");
    }
  });
});

