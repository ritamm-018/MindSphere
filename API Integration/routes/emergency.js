const express = require('express');
const Emergency = require('../API Integration/models/Emergency');
const router = express.Router();

// GET /api/emergency
router.get('/', async (req, res) => {
  try {
    const numbers = await Emergency.find();
    res.status(200).json(numbers);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
