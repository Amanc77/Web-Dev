const mongoose = require("mongoose");

const MONGO_URI =
  "mongodb+srv://amankrc7:IyfOG8DYWPBNXUlU@mongodbsetup.ucdq4gv.mongodb.net/?retryWrites=true&w=majority&appName=MongoDbSetup";

const connectToMongo = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("✅ MongoDB connected successfully");
  } catch (err) {
    console.error("❌ MongoDB  connection failed:", err.message);
    process.exit(1);
  }
};

module.exports = connectToMongo;
