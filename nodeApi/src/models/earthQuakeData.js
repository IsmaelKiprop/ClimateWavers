const mongoose = require('mongoose');

const earthquakeSchema = new mongoose.Schema({
  _id: String,
  earthquake_id: String,
  provider: String,
  title: String,
  date: Date,
  mag: Number,
  depth: Number,
  geojson: {
    type: {
      type: String,
      enum: ['Point'],
      required: true,
    },
    coordinates: {
      type: [Number],
      required: true,
    },
  },
  location_properties: {
    closestCity: {
      name: String,
      cityCode: Number,
      distance: Number,
      population: Number,
    },
    epiCenter: {
      name: String,
      cityCode: Number,
      population: Number,
    },
    closestCities: [
      {
        name: String,
        cityCode: Number,
        distance: Number,
        population: Number,
      },
    ],
  },
});

module.exports = mongoose.model('EarthquakeData', earthquakeSchema);
