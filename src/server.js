const express = require("express");
const connectDB = require("./lib/db");
const adminRouter = require("./routes/admin.route");
const userRouter = require("./routes/user.route");
const errorHandler = require("./middlewares/errors.handler");
const cors = require("cors");
require("dotenv").config();





const PORT = process.env.PORT || 8000
const app = express();


// middlewares
app.use(express.json());


app.use(
	cors({
		origin: process.env.FRONTEND_URI,
		credentials: true,
	})
);


// DB connecting 
connectDB();


// API
app.use("/api", adminRouter);
app.use("/api", userRouter);


app.use(errorHandler);


app.listen(PORT, () => console.log(`Server running on port http://localhost:${PORT}`))