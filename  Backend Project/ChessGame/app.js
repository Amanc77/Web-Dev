const express = require("express");
const mongoose = require("mongoose");
const http = require("http");
const socket = require("socket.io");
const path = require("path");
const { Chess } = require("chess.js");

// Setup
const app = express();
const server = http.createServer(app);
const io = socket(server);
const port = 3001;

const chess = new Chess();
let players = {};
let currentPlayer = "w";

// Set view engine and static folder
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

// MongoDB Connection
mongoose
  .connect("mongodb://127.0.0.1:27017/chessDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB error:", err));

// Routes
app.get("/", (req, res) => {
  res.render("index");
});

// Socket.io communication
io.on("connection", (socket) => {
  console.log("New user connected");

  socket.on("move", (data) => {
    // Broadcast move to other players
    socket.broadcast.emit("move", data);
  });

  socket.on("disconnect", () => {
    console.log("❌ User disconnected");
  });

  socket.on("exampleEvent", () => {
    console.log("Example event received from client");
  });
});

// Server start
const PORT = port;
server.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
