const express = require('express');
const Mood = require('../models/Mood');
const router = express.Router();

// GET /api/progress
router.get('/', async (req, res) => {
  const { userId } = req.query;
  try {
    const oneWeekAgo = new Date();
    oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);

    const moodData = await Mood.find({ 
      userId, 
      date: { $gte: oneWeekAgo } 
    }).sort({ date: 1 });

    // Prepare data for a progress graph (e.g., mood counts per day)
    const progress = moodData.map(entry => ({
      date: entry.date,
      mood: entry.mood
    }));

    res.status(200).json({ progress });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
