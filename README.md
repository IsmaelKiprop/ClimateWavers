# Climate Waver

This project aims to provide real-time climate change monitoring and disaster response capabilities through an integrated platform. The system utilizes Python and Node.js servers, MySQL for users and communities database, MongoDB for storing third-party datasets, and implements mitigation strategies for the OWASP Top 10 security risks.

 ## Project Architecture
![Architecture](https://github.com/IsmaelKiprop/ClimateWavers/blob/a479864e5942aeadf2dfc394b49790bb51a2c017/images/climate.png)

## Technologies Used

### Backend

#### Python Server:

**Framework**: Django
**Database**: MySQL for user and communities data
**Real-time Data Processing**: Pandas, NumPy
**Real-time Communication**: Django-socketio for websocket implementation

**Machine Learning**: TensorFlow

**APIs**: RESTful API endpoints for data retrieval and analysis

**Node.js Server**
**Framework**: Express.js
**Database**: MongoDB for storing third-party datasets
**Real-time Communication**: Socket.io for websocket implementation
**Security**: Helmet.js for securing HTTP headers, Express Validator for input validation

### Frontend
**Framework**: React.js
**Data Visualization**: D3.js, Chart.js
**Mapping**: Leaflet.js for interactive maps
**User Interface**: Material-UI for responsive design

### Databases:
#### MySQL
**Schema**: Users, Communities, Authentication
**ORM**: SQLAlchemy

#### MongoDB:
**Collections**: Third-party datasets, Real-time climate data
MongoDB Atlas for cloud-based storage

## Features
**Real-time Climate Monitoring**: Utilize satellite data, weather stations, and environmental sensors to provide real-time climate change information.

**Disaster Prediction**: Implement machine learning models to predict disaster events based on historical data and current climate patterns.

**Community Engagement**: Allow users to contribute real-time observations, report incidents, and participate in disaster preparedness activities.

**Third-party Data Integration**: Store and analyze third-party datasets related to climate change, environmental factors, and disaster events using MongoDB.

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

Setup Python Server:

Setup Node Server
