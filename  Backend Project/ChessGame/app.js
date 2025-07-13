const express = require("express");
const mongoose = require("mongoose");
const http = require("http");
const { Server } = require("socket.io");
const path = require("path");

// Setup
const app = express();
const server = http.createServer(app);
const io = new Server(server);
const port = 3001;

// MongoDB Connection
mongoose
  .connect("mongodb://127.0.0.1:27017/chessDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB error:", err));

// Set view engine and static folder
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.get("/", (req, res) => {
  res.render("index");
});

// Socket.io communication
io.on("connection", (socket) => {
  console.log("🔌 New user connected");

  socket.on("move", (data) => {
    // Broadcast move to other players
    socket.broadcast.emit("move", data);
  });

  socket.on("disconnect", () => {
    console.log("❌ User disconnected");
  });
});

// Server start
const PORT = port;
server.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
