import mongoose from "mongoose";

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      dbName: process.env.DB_NAME
    });
    console.log(`Connected to database: ${process.env.DB_NAME}`);
  } catch (error) {
    console.error("Connection to database failed:", error.message);
    process.exit(1); // Exit the process with failure
  }
};

export default connectDb;
