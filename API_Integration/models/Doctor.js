const mongoose = require('mongoose');

const DoctorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  specialization: { type: String, required: true },
  availableSlots: [{ type: Date }], // Available appointment slots
});

module.exports = mongoose.model('Doctor', DoctorSchema);
