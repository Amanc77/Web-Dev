import mongoose from "mongoose";
import dotenv from "dotenv";
import { DB_NAME } from "../constants.js";

// Load environment variables
dotenv.config();

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );

    console.log(
      `✅ MongoDB connected to: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.error("❌ MongoDB connection error:", error);
    process.exit(1); // Exit the process if DB connection fails
  }
};

export default connectDB;
