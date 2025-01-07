const logger = require("../logger/logger");

const trycatch = (controller) => {
  return async (req, res, next) => {
    try {
      await controller(req, res, next);
    } catch (error) {
      logger.error("Error", error);
      return next(error);
    }
  };
};

module.exports = trycatch;
