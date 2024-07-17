Task Management App
This project is a task management system built with the MERN stack (MongoDB, Express, React, Node.js).

Getting Started
Backend Setup
Install Dependencies: In the backend directory, run:

bash
Copy code
npm install
Start the Backend Server: Run the following command to start the backend server:

bash
Copy code
nodemon index.js
The backend server will start on http://localhost:5000.

Frontend Setup
Install Dependencies: In the frontend directory, run:

bash
Copy code
npm install
Start the Frontend Server: Run the following command to start the frontend server:

bash
Copy code
npm start
The frontend application will start on http://localhost:3000.

Registration and Login
Register a User: Use Postman to make a POST request to register a new user. The endpoint for registration is:

bash
Copy code
POST http://localhost:5000/api/user/register
Use the following JSON data format for the request body:

json
Copy code
{
  "name": "yash",
  "email": "yash@gmail.com",
  "title": "Software Engineer",
  "password": "yash",
  "isAdmin": false
}
Set isAdmin to true if registering an admin user.
Login: After registering the user, go to http://localhost:3000 in your browser to access the login page. Enter the registered email and password to log in.

Available Scripts
In the project directory, you can run:

npm start
Runs the app in development mode.
Open http://localhost:3000 to view it in your browser.

The page will reload when you make changes.
You may also see any lint errors in the console.