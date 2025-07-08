const express = require("express");
const mongoose = require("mongoose");

const { userModel, userValidationModel } = require("./models/user-model");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Welcome to the User API");
});

app.post("/create", async (req, res) => {
  // Validate the request body using Joi
  const { name, username, email, password, number } = req.body;
  const { error } = userValidationModel({
    name,
    username,
    email,
    password,
    number,
  });
  if (error) {
    return res.status(400).send(error.message);
  }
  userModel
    .create({
      name,
      username,
      email,
      password,
      number,
    })
    .then(() => {
      console.log("User created successfully");
      res.send(req.body);
    })
    .catch((err) => {
      console.error("Error creating user:", err);
      return res.status(500).send("Internal Server Error");
    });

  console.log(userValidationModel(req.body));
});

app.listen(3005, () => {
  console.log("Server is running on port 3005");
});
