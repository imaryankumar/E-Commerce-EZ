import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/database.js";
import router from "./routes/user.router.js";
dotenv.config();
const app = express();

//Database Connection
connectDB(process.env.MONGO_URL);

//Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//routes
app.use("/api/v1", router);

//server
app.listen(process.env.PORT, () => {
  console.log(`server started at ${process.env.PORT}`);
});
