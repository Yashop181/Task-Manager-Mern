const express = require('express');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const morgan = require('morgan');
const database = require('./database/database');
const routes = require('./routes/routes');
const {routeNotFound ,errorHandler } = require('./middleware/errorMiddleware')


database();
dotenv.config();
const app = express(); 
app.use(express.json());
app.use(cors({ origin: "*" })); 
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(morgan("dev"));
// Routes
app.use("/api", routes);

// Error handling middleware
app.use(routeNotFound);
app.use(errorHandler);

// Define the port
const PORT = process.env.PORT || 5000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
