const express = require('express');
const axios = require('axios');
const path = require('path');
const app = express();
const port = 3000;

// Serve static files from the parent directory
app.use(express.static(path.join(__dirname, '..')));

// API endpoint to get the IP address
app.get('/api/ip', async (req, res) => {
  try {
    const response = await axios.get('https://api.ipify.org?format=json');
    res.json({ ip: response.data.ip });
  } catch (error) {
    res.status(500).json({ error: 'Error fetching IP' });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
