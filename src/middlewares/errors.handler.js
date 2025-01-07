const errorHandler = (error, req, res, next) => {
    // If the error is a Mongoose validation error
    if (error.name === 'ValidationError') {
      const errorMessages = Object.values(error.errors).map(err => err.message);
  
      return res.status(400).json({
        message: 'Validation failed',
        errors: errorMessages,
      });
    }
  
    // Handle other errors as needed
    if (error.statusCode) {
      return res.status(error.statusCode).json({ message: error.message });
    }
  
    if (error.name === 'CastError') {
      return res.status(400).json({ message: 'Invalid ID format' });
    }
  
    if (error.name === 'TokenExpiredError') {
      return res.status(401).json({ message: 'Unauthorized: Your token has expired. Login again..' });
    }
  
    if (error.name === 'JsonWebTokenError') {
      return res.status(401).json({ message: 'Unauthorized: Invalid token..' });
    }
  
    if (error.code === 11000) {
      const keyName = Object.keys(error.keyValue || {})[0];
      return res.json({ message: `Given ${keyName} is already exist` });
    }
  
    return res.status(500).json({ message: error.message || 'Internal Server Error' });
  };
  
  module.exports = errorHandler;
  