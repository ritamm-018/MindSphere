const express = require('express');
const connectDB = require('./config/db');
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
app.use('/api/auth', require('./MindSphere/routes/auth'));
app.use('/api/mood-tracker', require('./MindSphere/routes/moodTracker'));
app.use('/api/progress', require('./MindSphere/routes/progress'));
app.use('/api/exercises', require('./MindSphere/routes/exercises'));
app.use('/api/events', require('./MindSphere/routes/events'));
app.use('/api/appointments', require('./MindSphere/routes/appointments'));
app.use('/api/emergency', require('./MindSphere/routes/emergency'));

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
