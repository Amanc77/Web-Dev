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
io.on("connection", (uniqueSocket) => {
  console.log("New user connected");

  if (!players.white) {
    players.white = uniqueSocket.id;
    uniqueSocket.emit("playerRole", "white");
  } else if (!players.black) {
    players.black = uniqueSocket.id;
    uniqueSocket.emit("playerRole", "black");
  } else {
    uniqueSocket.emit("spectatorRole");
  }

  uniqueSocket.on("disconnect", () => {
    console.log("❌ User disconnected");
    if (uniqueSocket.id === players.white) {
      delete players.white;
    } else if (uniqueSocket.id === players.black) {
      delete players.black;
    }
  });

  uniqueSocket.on("move", (move) => {
    try {
      if (chess.turn() === "white" && uniqueSocket.id === players.white) {
        return;
      } else if (
        chess.turn() === "black" &&
        uniqueSocket.id === players.black
      ) {
        return;
      }

      if (chess.move(move)) {
        io.emit("move", move);
        console.log(`Move made: ${move.san}`);
      } else {
        console.error("Invalid move attempted:", move);
      }
      const result = chess.move(move);
      if (result) {
        currentPlayer = chess.turn();

        io.emit("move", result);
        io.emit("updateBoard", chess.fen());
        console.log(`Move made: ${result.san}`);
      } else {
        console.log("Invalid move attempted:", move);
        uniqueSocket.emit("Invalid move", move);
      }
    } catch (error) {
      console.error("Error processing move:", error);
      uniqueSocket.emit("error", "Invalid move");
      return;
    }
  });

  uniqueSocket.on("exampleEvent", () => {
    console.log("Example event received from client");
  });
});

// Server start
const PORT = port;
server.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
