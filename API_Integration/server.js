const express = require('express');
const connectDB = require('./API_Integration/config/db');
require('dotenv').config();

const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Connect to DB
connectDB();

// Routes
app.use('/api/auth', require('./API_Integration/routes/auth'));
app.use('/api/mood-tracker', require('./API_Integration/routes/moodTracker'));
app.use('/api/progress', require('./API_Integration/routes/progress'));
app.use('/api/exercises', require('./API_Integration/routes/exercises'));
app.use('/api/events', require('./API_Integration/routes/events'));
app.use('/api/appointments', require('./API_Integration/routes/appointments')); // Fixed path
app.use('/api/emergency', require('./API_Integration/routes/emergency'));

// Global Error Handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal server error' });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
