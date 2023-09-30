const express = require('express');
const router = express.Router();
const EarthquakeData = require('../models/earthQuakeData');

// Define a route to retrieve earthquake data at /earthquake-data
router.get('/data', async (req, res) => {
  try {
    // Fetch earthquake data from MongoDB
    const earthquakeData = await EarthquakeData.find();

    // Send the retrieved data as a JSON response
    res.status(200).json({ earthquakeData });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'An error occurred while retrieving earthquake data.' });
  }
});

module.exports = router;
