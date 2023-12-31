// nodeApi/src/controllers/earthQuakeController.js

const axios = require('axios');
const EarthquakeData = require('../models/earthQuakeData'); // Assuming your model file is named 'earthquakeData'

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

      const earthquake = new EarthquakeData({
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

    // Send a real-time update to connected clients (similar to climateController.js)
    sendRealTimeEarthquakeDataToClients(earthquakeData);

    res.status(200).json({ message: 'Earthquake data fetched and stored successfully.' });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'An error occurred while fetching and storing earthquake data.' });
  }
}

// Function to send real-time earthquake data to connected clients
function sendRealTimeEarthquakeDataToClients(data) {
  // Establish a WebSocket connection here (similar to climateController.js)
  // You can reuse the WebSocket server setup from app.js
}

module.exports = {
  fetchAndStoreEarthquakeData,
};

