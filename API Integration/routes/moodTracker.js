const express = require('express');
const Mood = require('../API Integration/models/Mood');
const router = express.Router();

// POST /api/mood-tracker/log
router.post('/log', async (req, res) => {
  const { userId, mood, journal } = req.body;
  try {
    const moodLog = new Mood({ userId, mood, journal });
    await moodLog.save();
    res.status(201).json({ message: 'Mood log saved successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// GET /api/mood-tracker
router.get('/', async (req, res) => {
  const { userId } = req.query;
  try {
    const moods = await Mood.find({ userId }).sort({ date: -1 });
    res.status(200).json(moods);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
