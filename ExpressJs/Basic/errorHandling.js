import express from "express";

const app = express();

app.get("/", (req, res, next) => {
  try {
    res.send("hey");
  } catch (error) {
    next(error);
  }
});

app.use((err, req, res, next) => {
  res.status(500).send(err.message);
});

app.listen(3000);
