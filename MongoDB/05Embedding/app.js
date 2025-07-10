const express = require("express");
const mongoose = require("mongoose");

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MongoDB Connection
mongoose
  .connect("mongodb://127.0.0.1:27017/embedDB")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("Connection error:", err));

// Schema
const userSchema = mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: String,
  password: String,
  posts: [
    {
      content: String,
      date: { type: Date, default: Date.now },
    },
  ],
});

const userModel = mongoose.model("user", userSchema);

// Create user
app.post("/create", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const newUser = await userModel.create({ username, email, password });
    res.send(newUser);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

// Add post
app.post("/:username/create/post", async (req, res) => {
  try {
    const { username } = req.params;
    const { content } = req.body;

    const user = await userModel.findOne({ username });
    if (!user) return res.status(404).send("User not found");

    user.posts.push({ content });
    await user.save();

    res.send(user);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

// Start server
app.listen(3006, () => {
  console.log("Server running on port 3006");
});
