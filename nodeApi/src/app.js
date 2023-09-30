// nodeApi/src/app.js

const express = require('express');
const mongoose = require('mongoose');
const http = require('http'); // Import the http module
const WebSocket = require('ws'); // Import the WebSocket library
const bodyParser = require('body-parser');
const cors = require('cors'); // Import the cors middleware
const routes = require('./routes/routes');
const earthquakeController = require('../src/controllers/earthQuakeController');

const app = express();
const server = http.createServer(app); // Create an HTTP server

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

  ws.on('close', () => {
    // Handle WebSocket disconnections here
    console.log('WebSocket disconnected');
  });
});

server.listen(port, () => {
  console.log(`Node.js server is running on port ${port}`);
});

module.exports = app;

