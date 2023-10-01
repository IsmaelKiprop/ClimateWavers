const mongoose = require('mongoose');

const earthquakeSchema = new mongoose.Schema({
  magnitude: Number,
  location: String,
  timestamp: Date,
});

module.exports = mongoose.model('EarthquakeData', earthquakeSchema);

