const express = require("express");
const mongoose = require("mongoose");

const mongoDbUrl =
  "mongodb+srv://amankrc7:2R21aZT4L6t6NyyZ@mongodbsetup.ucdq4gv.mongodb.net/?retryWrites=true&w=majority&appName=MongoDbSetup";

const Joi = require("joi");

mongoose
  .connect(mongoDbUrl)
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 30,
  },
  username: {
    type: String,
    required: true, // Unique username
    minlength: 3,
    maxlength: 30,
    unique: true,
  },
  email: {
    type: String,
    required: true, // Unique email
    minlength: 5,
    maxlength: 50,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
    maxlength: 100,
  },
  number: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 15,
    unique: true,
  },
});

// Joi validation schema
function userValidationModel(data) {
  const schema = Joi.object({
    name: Joi.string().min(3).max(30).required(),
    username: Joi.string().min(3).max(30).required(),
    email: Joi.string().email().min(5).max(50).required(),
    password: Joi.string().min(6).max(100).required(),
    number: Joi.string().min(5).max(15).required(),
  });

  return schema.validate(data);
}

const userModel = mongoose.model("user", userSchema);

module.exports = { userModel, userValidationModel };
