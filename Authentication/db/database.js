import mongoose from "mongoose";

const connectDB = (MONGO_URL) => {
  mongoose
    .connect(MONGO_URL,{ dbName:"Auth"})
    .then(() => console.log("DB Connect"))
    .catch((err) => console.log(err));
};

export default connectDB;
