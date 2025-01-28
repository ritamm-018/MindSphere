const express = require('express');
const Event = require('../API Integration/models/Event');
const router = express.Router();

// GET /api/events
router.get('/', async (req, res) => {
  try {
    const events = await Event.find();
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// POST /api/events/rsvp
router.post('/rsvp', async (req, res) => {
  const { userId, eventId } = req.body;
  try {
    const event = await Event.findById(eventId);
    if (!event) return res.status(404).json({ error: 'Event not found' });

    if (!event.rsvpUsers.includes(userId)) {
      event.rsvpUsers.push(userId);
      await event.save();
    }

    res.status(200).json({ message: 'RSVP successful' });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
