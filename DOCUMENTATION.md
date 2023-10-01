# Node.js Earthquake and Climate Data API

This Node.js API fetches and stores earthquake data from an external API and analyzes climate data using the NOAA Climate Data API. It also provides real-time updates to connected clients through WebSockets.

## Project File Structure

The following is an overview of the file structure for this Node.js application:

nodeApi/
├── src/
│ ├── app.js
│ ├── controllers/
│ │ ├── earthquakeController.js
│ │ ├── climateController.js
│ ├── routes/
│ │ ├── routes.js
│ ├── models/
│ │ ├── earthQuakeData.js
│ │ ├── climateData.js
├── package.json
├── README.md 



- `nodeApi/`: The root directory of the project.
- `src/`: This directory contains the main source code of the Node.js application.
  - `app.js`: The entry point of the application, where you set up the Express.js server, connect to MongoDB, and define API routes.
  - `controllers/`: This directory holds controller logic for different aspects of the application, such as fetching and storing earthquake and climate data, and sending real-time updates via WebSocket.
    - `earthquakeController.js`: Contains logic for fetching and storing earthquake data and sending real-time updates.
    - `climateController.js`: Contains logic for fetching and analyzing climate data and sending real-time updates.
  - `routes/`: Contains API route definitions.
    - `routes.js`: Defines routes for retrieving earthquake and climate data.
  - `models/`: Contains MongoDB schema definitions for data models.
    - `earthQuakeData.js`: Defines the schema for earthquake data.
    - `climateData.js`: Defines the schema for climate data.
- `package.json`: This file specifies project dependencies and scripts for running and managing the application.
- `README.md`: The project's documentation file, which contains information about the project, its file structure, and instructions on setting up and running the application.

## Description

### 1. app.js

The `app.js` file is the main entry point of the application. It sets up the Express.js server, connects to MongoDB, defines API routes, and creates a WebSocket server for real-time updates. It includes the following features:

- Express.js Server: Initializes the Express.js server to handle HTTP requests.
- MongoDB Connection: Connects to a MongoDB Atlas cluster using Mongoose.
- CORS Middleware: Uses the CORS middleware to handle cross-origin resource sharing.
- API Routes: Defines API routes for fetching earthquake data and serving climate data.
- WebSocket Server: Creates a WebSocket server to provide real-time updates to clients.

### 2. controllers/earthquakeController.js

The `earthquakeController.js` file contains the controller logic for fetching and storing earthquake data. It makes requests to an external earthquake API, stores data in MongoDB, and sends real-time updates to connected WebSocket clients. It includes the following features:

- Fetching Earthquake Data: Makes requests to the external earthquake API to retrieve data.
- Storing Data: Stores earthquake data in MongoDB using Mongoose models.
- Real-Time Updates: Sends real-time updates to connected WebSocket clients when new data is available.

### 3. controllers/climateController.js

The `climateController.js` file contains the controller logic for fetching and analyzing climate data using the NOAA Climate Data API. It includes the following features:

- Fetching Climate Data: Sends requests to the NOAA Climate Data API to retrieve climate data.
- Analyzing Data: Processes and analyzes climate data.
- Updating MongoDB: Updates MongoDB with the analyzed climate data.
- Real-Time Updates: Sends real-time updates to connected WebSocket clients with the latest climate data.

### 4. routes/routes.js

The `routes.js` file defines API routes for retrieving earthquake and climate data. It uses Express.js routing to handle requests and communicates with the MongoDB database to fetch data.

### 5. models/earthQuakeData.js and models/climateData.js

The `earthQuakeData.js` and `climateData.js` files define the MongoDB schemas for earthquake and climate data, respectively. They specify the data structures used to store records in the database.

## Getting Started

To run this application locally, follow these steps:

1. Clone this repository.

2. Install the required dependencies using the following command:

   
   npm install


Configure Environment Variables: Create a .env file in the project's root directory to store sensitive information like API keys and database credentials. Here's a sample .env file:



MONGODB_URI=your-mongodb-uri
NOAA_API_KEY=your-noaa-api-key

Replace your-mongodb-uri and your-noaa-api-key with your actual MongoDB Atlas connection URI and NOAA API key.

Run the Application: Start the Node.js application by running the following command:



    npm start

    This will start the server, and you'll see a message indicating that the Node.js server is running on a specific port (e.g., Node.js server is running on port 3000).

    Access the Endpoints: You can access the following endpoints:
        To fetch and store earthquake data: GET http://localhost:3000/fetch-earthquake-data
        To retrieve earthquake data: GET http://localhost:3000/data

    WebSocket Server: The application creates a WebSocket server to provide real-time updates to clients. You can establish WebSocket connections to the server using a WebSocket client library or tool.

    Real-Time Updates: When new earthquake or climate data is available, the application will send real-time updates to connected WebSocket clients. You can implement WebSocket functionality in your client application to receive these updates.

Dependencies

The application uses the following key dependencies:

    Express.js: A web application framework for Node.js.
    Mongoose: An ODM (Object Data Modeling) library for MongoDB.
    axios: A promise-based HTTP client for making API requests.
    ws (WebSocket): A library for WebSocket communication.

Make sure to check the package.json file for a full list of dependencies and their versions.


