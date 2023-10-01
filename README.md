# Climate Waver

This project aims to provide real-time climate change monitoring and disaster response capabilities through an integrated platform. The system utilizes Python and Node.js servers, MySQL for users and communities database, MongoDB for storing third-party datasets, and implements mitigation strategies for the OWASP Top 10 security risks.

1. [Project Overview](#project-architecture)
2. [Technologies Stack](technologies-stack)
     - [Backend](#backend)
     - [Frontend](#frontend)
     - [Machine Learning](#machine-learning)
     - [Database](#database)
4. [Features](#features)
5. [Setup and Installation](#sstup-and-installation)
6. [OWASP Top 10 Mitigation](#owasp-top-10-mitigation)

   
 ## Project Architecture
![Architecture](https://github.com/IsmaelKiprop/ClimateWavers/blob/fe180556e0504ee326a915adc0fa881969a5a4a3/images/architecture.jpg)

## Technologies Used

### Backend

#### Python Server:
**Framework**: Django\
**Database**: MySQL for user and communities data\
**Real-time Data Processing**: Pandas, NumPy\
**Real-time Communication**: Django-socketio for websocket implementation\
**APIs**: RESTful API endpoints for data retrieval and analysis




**Node.js Server**

**Framework**: Express.js\
**Database**: MongoDB for storing third-party datasets\
**Real-time Communication**: Socket.io for websocket implementation\
**Security**: Helmet.js for securing HTTP headers, Express Validator for input validation\
**APIs**: RESTful websocket API endpoints for real time data retrieval, updates and analysis


### Machine Learning

TensorFlow

### Frontend

**Framework**: React.js\
**Data Visualization**: D3.js, Chart.js\
**Mapping**: Leaflet.js for interactive maps\
**User Interface**: Material-UI for responsive design\

### Databases:
- **MySQL**
    - **Schema**: Users, Communities\
           Authentication\
    - **ORM**: SQLAlchemy

- **MongoDB**:
   - **Collections**: Third-party datasets, Real-time climate data\
      MongoDB Atlas for cloud-based storage

## Features
**Real-time Climate Monitoring**: Utilize satellite data, weather stations, and environmental sensors to provide real-time climate change information.\
**Disaster Prediction**: Implement machine learning models to predict disaster events based on historical data and current climate patterns.\
**Community Engagement**: Allow users to contribute real-time observations, report incidents, and participate in disaster preparedness activities.\
**Third-party Data Integration**: Store and analyze third-party datasets related to climate change, environmental factors, and disaster events using MongoDB.\

#### OWASP Top 10 Mitigation:
Implement input validation and sanitization to prevent SQL Injection and Cross-site Scripting (XSS) attacks.
Secure HTTP headers using Helmet.js to prevent various attacks like Clickjacking.
Implement secure authentication mechanisms and use encryption for sensitive data storage to prevent data breaches.
Regular security audits and code reviews to identify and fix vulnerabilities.

#### Setup and Installation
Clone the Repository:
```bash
git clone https://https://github.com/IsmaelKiprop/ClimateWavers.git
cd ClimateWavers
```

**Setup Python Server**:

1. **Clone the Repository:**
   ```bash
   cd Django-server
   ```

2. **Install Dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

3. **Database Setup:**
   - Configure the database settings in `settings.py`.
   - Run migrations:
     ```bash
     python manage.py migrate
     ```

4. **Static and Media Files:**
   - Collect static files:
     ```bash
     python manage.py collectstatic
     ```
   - Configure media file settings in `settings.py`.

5. **Run the Django Development Server:**
   ```bash
   python manage.py runserver
   ```

**Setup Node Server:**

 1. **Install Dependencies:**
   ```bash
   npm install
   ```

2. **Environment Variables:**
   - Create a `.env` file in the root directory.
   - Define the following environment variables in the `.env` file:
     ```env
     PORT=3000
     THIRD_PARTY_API_URL=<third-party-api-url>
     ```

3. **Run the Node.js Server:**
   ```bash
   npm start
   ```
