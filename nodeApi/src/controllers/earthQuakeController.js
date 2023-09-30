const axios = require('axios');
const EarthquakeData = require('../models/earthQuakeData');

async function fetchAndStoreEarthquakeData(req, res) {
  try {
    // Make an API request to fetch earthquake data from USGS API
    const response = await axios.get('https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2000-01-01&endtime=2023-09-30');
    const earthquakeData = response.data.features;

    // Store the earthquake data in MongoDB
    for (const feature of earthquakeData) {
      const { mag, place, time } = feature.properties;

      const earthquake = new EarthquakeData({
        magnitude: mag,
        location: place,
        timestamp: new Date(time),
      });

      await earthquake.save();
    }

    res.status(200).json({ message: 'Earthquake data fetched and stored successfully.' });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'An error occurred while fetching and storing earthquake data.' });
  }
}

module.exports = {
  fetchAndStoreEarthquakeData,
};
