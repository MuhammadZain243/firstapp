require('dotenv').config();

const express = require('express');
const app = express();

// Read environment variables
const PORT = process.env.PORT || 3000;
const APP_NAME = process.env.APP_NAME || 'Default App';

// Middleware to parse JSON
app.use(express.json());

// Simple GET route
app.get('/', (req, res) => {
  res.send(`Welcome to ${APP_NAME}!`);
});

// Example POST route
app.post('/greet', (req, res) => {
  const { name } = req.body;
  res.send(`Hello, ${name || 'Guest'} from ${APP_NAME}!`);
});

// Start the server
app.listen(PORT, () => {
  console.log(`✅ ${APP_NAME} is running at http://localhost:${PORT}`);
});
