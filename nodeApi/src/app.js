const express = require('express');
const mongoose = require('mongoose');
const http = require('http');
const WebSocket = require('ws');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./routes/routes');
const earthquakeController = require('../src/controllers/earthQuakeController');
const chatbotController = require('../src/controllers/chatbotController'); // Import the Chatbot Controller

const app = express();
const server = http.createServer(app);
const port = process.env.PORT || 3000;

// Replace this with your MongoDB Atlas connection string
const atlasConnectionString = 'mongodb+srv://climate:climate@cluster0.nel0lco.mongodb.net/?retryWrites=true&w=majority';

// Connect to the MongoDB Atlas cluster
mongoose.connect(atlasConnectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.Promise = global.Promise;

// Use the cors middleware with default options (allow all origins)
app.use(cors());

// API route to fetch and store earthquake data
app.get('/fetch-earthquake-data', earthquakeController.fetchAndStoreEarthquakeData);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(routes);

// Create a WebSocket server
const wss = new WebSocket.Server({ server });

wss.on('connection', (ws) => {
  // Handle WebSocket connections here
  console.log('WebSocket connected');

  ws.on('message', async (message) => {
    // Handle incoming messages from WebSocket clients (assuming they are user messages)
    try {
      const chatbotResponse = await chatbotController.interactWithGPT3(message);
      // Send the chatbot response back to the client
      ws.send(chatbotResponse);
    } catch (error) {
      console.error('Error handling WebSocket message:', error);
    }
  });

  ws.on('close', () => {
    // Handle WebSocket disconnections here
    console.log('WebSocket disconnected');
  });
});

server.listen(port, () => {
  console.log(`Node.js server is running on port ${port}`);
});

module.exports = app;

