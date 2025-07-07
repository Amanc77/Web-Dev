const express = require("express");

const mongoose = require("mongoose");
const app = express();

const connectToMongo = require("./config/mongoose");
const users = require("./models/users");

const userModel = require("./models/user");
const port = 3000 || process.env.PORT;

// Middleware to parse JSON bodies
app.use(express.json());

// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/find", async (req, res) => {
  // const fetchUser = await userModel.find({
  //   $and: [{ age: { $ge: 23 } }, { age: { $ls: 25 } }],
  // });
  const fetchUser = await userModel.find({
    $and: [{ age: { $gte: 23 } }, { age: { $lte: 25 } }],
  });
  console.log("fetchUser:", fetchUser);
  res.send(fetchUser);
});

app.get("/findByName", async (req, res) => {
  const fetchUser = await userModel.find({ name: { $regex: /^A.*a$/i } });
  console.log("fetchUser:", fetchUser);
  res.send(fetchUser);
});

app.get("/create", async (req, res) => {
  const createdUser = await userModel.create({
    //this is asynchronous operation
    name: "naman Kumar",
    email: "amankdfsrc@gamil.com",
    password: "12ad3456",
    age: 20,
  });
  console.log("createdUser:", createdUser);
  res.send(createdUser);
});

app.get("/find", async (req, res) => {
  const fetchUser = await userModel.find();
  console.log("fetchUser:", fetchUser);
  res.send(fetchUser);
});
app.get("/findOne", async (req, res) => {
  const fetchUser = await userModel.findOne({ name: "aman Kumar" });
  console.log("fetchUser:", fetchUser);
  res.send(fetchUser);
});

app.get("/update", async (req, res) => {
  const updatedUser = await userModel.updateOne(
    { name: "Aman Kumar" },
    { $set: { age: 22 } }
  );
  console.log("updatedUser:", updatedUser);
  res.send(updatedUser);
});
app.get("/insertMany", async (req, res) => {
  const updatedUser = await userModel.insertMany(users);
  console.log("USERS TO INSERT:", updatedUser);

  res.send(updatedUser);
});

app.post("/update/:age", async (req, res) => {
  const age = req.params.age;
  const updatedUser = await userModel.updateOne(
    { name: "Aman Kumar" },
    { $set: { age: `${age}` } }
  );
  console.log("updatedUser  :", updatedUser);
  res.send(updatedUser);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
  //console.log(users);
  connectToMongo()
    .then(() => {
      console.log("server is successfully connected to MongoDB");
    })
    .catch((err) => {
      console.error("Error  connecting to MongoDB:", err);
    });
});
