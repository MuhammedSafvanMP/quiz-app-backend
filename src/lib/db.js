const mongoose =  require("mongoose");
const logger = require("../utils/logger/logger");




 const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        .then(() => console.log("DB connected"))
        .catch(error => logger.info(error))
        
    } catch (error) {
      logger.error(error);
      process.exit(1);
    }
}


module.exports = connectDB;