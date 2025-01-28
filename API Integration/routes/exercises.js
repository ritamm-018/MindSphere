const express = require('express');
const Exercise = require('../API Integration/models/Exercise');
const router = express.Router();

// GET /api/exercises
router.get('/', async (req, res) => {
  try {
    const exercises = await Exercise.find();
    res.status(200).json(exercises);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
