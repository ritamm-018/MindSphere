const mongoose = require('mongoose');

const EmergencySchema = new mongoose.Schema({
  name: { type: String, required: true },
  number: { type: String, required: true },
});

module.exports = mongoose.model('Emergency', EmergencySchema);
