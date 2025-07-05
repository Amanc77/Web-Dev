const mongoose = require("mongoose");
const config = require("./config");

const debuglog = require("debug")("development:mongooseconfig");

mongoose.connect("mongodb://127.0.0:27017/testDb");

const db = mongoose.connection;
db.on("error", (err) => {
  debuglog("MongoDB connection error:", err);
});
db.once("open", () => {
  debuglog("MongoDB connection established successfully");
});
db.on("disconnected", () => {
  debuglog("MongoDB connection disconnected");
});
module.exports = db;
