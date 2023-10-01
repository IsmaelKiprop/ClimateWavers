# Climate Wavers - Django Server


The Django Server component of the Climate Change and Disaster Response Platform is responsible for handling core functionalities, user management, and data processing tasks. Built on the Django web framework, this server provides a robust and secure backend for the application.

## Table of Contents

- [Climate Wavers - Django Server](#climate-wavers---django-server)
  - [Table of Contents](#table-of-contents)
  - [Project Overview](#project-overview)
  - [Features](#features)
  - [Installation and Setup](#installation-and-setup)
  - [API Endpoints](#api-endpoints)
  - [Environment Variables](#environment-variables)
  - [License](#license)


## Project Overview

The Climate Change and Disaster Response Platform aims to monitor climate changes, predict natural disasters, and facilitate efficient disaster response. Leveraging Django, the server component ensures seamless user experience, data management, and integration with various data sources.

## Features

- **User Authentication:** Secure user registration, login, and profile management.
- **Data Management:** Store and manage user data, community information, and datasets.
- **Real-time Data Processing:** Process incoming data streams for analysis and visualization.
- **Collaborative Communities:** Enable users to form communities, share observations, and collaborate.
- **API Endpoints:** Provides RESTful APIs for frontend interaction and external integrations.

## Installation and Setup

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/IsmaelKiprop/ClimateWavers.git
   cd ClimateWavers
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

   The Django server will be available at `http://localhost:8000`.

## API Endpoints

- **User Management:**
  - `/api/users/register/`: POST endpoint for user registration.
  - `/api/users/login/`: POST endpoint for user login.
  - `/api/users/profile/`: GET endpoint to retrieve user profile information.

- **Community Management:**
  - `/api/communities/`: GET and POST endpoint for community management.
  - `/api/communities/<community_id>/`: GET, PUT, and DELETE endpoint for individual communities.

- **Data Processing:**
  - Define additional endpoints for real-time data processing based on project requirements.

## Environment Variables

- **SECRET_KEY:** Django secret key for security (store in a secure environment).
- **DEBUG:** Set to `True` for development, `False` for production.
- **DATABASE_URL:** Database connection URL for MYSQL databases.
- **ALLOWED_HOSTS:** List of allowed hostnames for the Django server.


## License

This project is licensed under the [MIT License](LICENSE).
