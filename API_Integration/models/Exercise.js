const mongoose = require('mongoose');

const ExerciseSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  duration: { type: Number }, // in minutes
  category: { type: String }, // e.g., "Yoga", "Meditation", etc.
});

module.exports = mongoose.model('Exercise', ExerciseSchema);
