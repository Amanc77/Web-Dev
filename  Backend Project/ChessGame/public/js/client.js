const socket = io();
const game = new Chess();

console.log("Client connected");

socket.on("move", (move) => {
  game.move(move);
  document.getElementById("moves").innerText += `\nOpponent: ${move.san}`;
});

// Sample local move trigger (normally you'd integrate with a chessboard UI)
document.addEventListener("keydown", () => {
  const moves = game.moves();
  if (moves.length > 0) {
    const move = game.move(moves[0]);
    socket.emit("move", move);
    document.getElementById("moves").innerText += `\nYou: ${move.san}`;
  }
});
