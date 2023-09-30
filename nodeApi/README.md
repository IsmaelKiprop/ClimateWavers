# Earthquake Data API

This Node.js application fetches earthquake data from an external API and stores it in a MongoDB database. It also provides API routes to access the stored earthquake data.


## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/IsmaelKiprop/ClimateWavers.git
   cd earthquake-data-api

    Install the dependencies:

   
npm install

Configure MongoDB:

    Replace <your-mongodb-uri> in app.js with your MongoDB Atlas connection string.

Start the application:

bash

    npm start

The application should now be running on http://localhost:3000.
API Routes

    /fetch-earthquake-data: Fetch earthquake data from the external API and store it in the MongoDB database.
        Method: GET

    /data: Retrieve earthquake data from the MongoDB database.
        Method: GET

Usage
Fetch and Store Earthquake Data

To fetch and store earthquake data from the external API, send a GET request to /fetch-earthquake-data:

bash

curl http://localhost:3000/fetch-earthquake-data

Retrieve Earthquake Data

To retrieve earthquake data from the MongoDB database, send a GET request to /data:

bash

curl http://localhost:3000/data

