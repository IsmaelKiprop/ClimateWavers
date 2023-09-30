const express = require('express');
const mongoose = require('mongoose');
const earthquakeController = require('../src/controllers/earthQuakeController');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import the cors middleware

const app = express();
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

// Import and use your custom routes
const routes = require('./routes/routes');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(routes);

app.listen(port, () => {
  console.log(`Node.js server is running on port ${port}`);
});

module.exports = app;
