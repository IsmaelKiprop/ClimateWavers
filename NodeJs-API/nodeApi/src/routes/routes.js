const express = require('express');
const router = express.Router();
const EarthquakeData = require('../models/earthQuakeData');
const chatbotController = require('../controllers/chatbotController'); // Import the Chatbot Controller

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

// Define a new route to interact with the chatbot
router.post('/interact-with-chatbot', async (req, res) => {
  const { userMessage } = req.body;

  try {
    const chatbotResponse = await chatbotController.interactWithGPT3(userMessage);
    res.json({ chatbotResponse });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while interacting with the chatbot.' });
  }
});

module.exports = router;

