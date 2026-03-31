'use strict';

const express = require('express');
const app = express();
const port = 3000;

// Middleware
app.use(express.json());

// Example API endpoints
app.get('/api', (req, res) => {
    res.send('API is running!');
});

app.get('/api/time', (req, res) => {
    const currentTime = new Date().toISOString();
    res.json({ currentTime });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
