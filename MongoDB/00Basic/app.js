const express = require("express");

const app = express();

const mongooseConnction = require("./config/mongoose");
app.get("/", (req, res) => {
  res.send("server is on");
});

app.listen(3000);
