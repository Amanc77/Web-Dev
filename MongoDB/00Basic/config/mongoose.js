const mongoose = require("mongoose");

const MONGO_URI =
  "mongodb+srv://mahakal9682:eRNLRfit7SpfZTLA@cluster0.btl8zqu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

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
