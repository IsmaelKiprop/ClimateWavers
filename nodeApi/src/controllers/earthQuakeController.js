const axios = require('axios');
const EarthquakeData = require('../models/earthQuakeData');
const { ObjectId } = require('mongoose').Types; // Import ObjectId from mongoose

async function fetchAndStoreEarthquakeData(req, res) {
  try {
    // Make an API request to fetch earthquake data from the new API
    const response = await axios.get('https://api.orhanaydogdu.com.tr/deprem/kandilli/live');
    const earthquakeData = response.data.result;

    // Store the earthquake data in MongoDB
    for (const earthquakeItem of earthquakeData) {
      const {
        earthquake_id,
        provider,
        title,
        date,
        mag,
        depth,
        geojson,
        location_properties,
      } = earthquakeItem;

      // Generate a new ObjectId for _id
      const _id = new ObjectId();

      const earthquake = new EarthquakeData({
        _id,
        earthquake_id,
        provider,
        title,
        date: new Date(date),
        mag,
        depth,
        geojson,
        location_properties,
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
