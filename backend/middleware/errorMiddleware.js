// Middleware to handle route not found
const routeNotFound = (req, res, next) => {
  // Create a new error object with a message that includes the original URL of the request
  const error = new Error(`Routes not found ${req.originalUrl}`);
  res.status(404);
  next(error);
};

// Middleware to handle errors
const errorHandler = (err, req, res, next) => {
   // If the status code is still 200 (OK), change it to 500 (Internal Server Error)
  // Otherwise, keep the existing status code
  let statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  let message = err.message;
  
  // Check if error is a CastError (MongoDB ObjectId error)
  if (err.name === "CastError" && err.kind === "ObjectId") {
    statusCode = 404;
    message = "Resource not found";
  }
  
  // Set response status and send error message
  res.status(statusCode).json({
    message: message,
  });
};

module.exports = {
  routeNotFound,
  errorHandler,
};
