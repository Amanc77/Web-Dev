const express = require("express");
const connectToMongo = require("./config/mongoose");
const mongoose = require("mongoose");

const app = express();
const userModel = require("./models/user");

app.get("/", (req, res) => {
  res.send("✅ Server is running  and DB connected");
});

app.post("/create", async (req, res) => {
  const createdUser = await userModel.create({
    name: "Aman kumar",
    email: "aman@gamil.comm",
    password: "123456",
    age: 30,
  });
  console.log("createdUser:", createdUser);
  res.send(createdUser);
});

app.get("/read", async (req, res) => {
  const user = await userModel.findOne({ name: "aman" });

  console.log("user:", user);
  res.send(user);
});

// Connect to DB and start server
connectToMongo().then(() => {
  app.listen(3001, () => {
    console.log("🚀 Server listening on http://localhost:3001");
  });
});
