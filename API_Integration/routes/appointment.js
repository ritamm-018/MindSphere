const express = require('express');
const Doctor = require('../models/Doctor'); // Adjusted file path
const Appointment = require('../models/Appointment'); // Adjusted file path
const router = express.Router();

// GET /api/doctors
router.get('/doctors', async (req, res) => {
  try {
    const doctors = await Doctor.find();
    res.status(200).json(doctors);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// POST /api/appointments/book
router.post('/book', async (req, res) => {
  const { userId, doctorId, date } = req.body;
  try {
    const appointment = new Appointment({ userId, doctorId, date });
    await appointment.save();
    res.status(201).json({ message: 'Appointment booked successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;

