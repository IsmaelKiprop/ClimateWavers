const express = require('express');
const mongoose = require('mongoose');
const earthquakeController = require('../src/controllers/earthQuakeController');

const app = express();
const port = process.env.PORT || 3000;

// Replace this with your MongoDB Atlas connection string
const atlasConnectionString = 'mongodb+srv://<username>:<password>@cluster.mongodb.net/test?retryWrites=true&w=majority';

// Connect to the MongoDB Atlas cluster
mongoose.connect(atlasConnectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// API route to fetch and store earthquake data
app.get('/fetch-earthquake-data', earthquakeController.fetchAndStoreEarthquakeData);

app.listen(port, () => {
  console.log(`Node.js server is running on port ${port}`);
});
