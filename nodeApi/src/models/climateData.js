const mongoose = require('mongoose');

const climateSchema = new mongoose.Schema({
  location: String,
  temperature: Number,
  description: String,
  timestamp: { type: Date, default: Date.now },
});

module.exports = mongoose.model('WeatherData', climateSchema);
