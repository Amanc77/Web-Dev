import express from "express";

const app = express();
const port = 8000;

app.get("/", (req, res) => {
  res.send(`now i am live..`);
});

app.listen(port, (req, res) => {
  console.log(`server is running on ${port}`);
});
