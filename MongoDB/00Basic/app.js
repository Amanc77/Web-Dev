const express = require("express");
const mongoose = require("mongoose");
const app = express();

const UserModel = require("./models/user");
const MONGO_URI =
  "mongodb+srv://mahakal9682:eRNLRfit7SpfZTLA@cluster0.btl8zqu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB connected successfully");

    // Start server only after DB connects
    app.listen(3000, () => {
      console.log("🚀 Server is running on http://localhost:3000");
    });
  })
  .catch((err) => {
    console.error("❌ MongoDB connection failed:", err.message);
    process.exit(1); // Exit app on DB failure
  });

app.get("/", (req, res) => {
  res.send("Hello from MongoDB-connected app!");
});
