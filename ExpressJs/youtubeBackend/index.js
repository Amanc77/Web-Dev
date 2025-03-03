const express = require("express");

const path = require("path");

const fs = require("fs");

const app = express();

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));

const port = 8003;

app.get("/", (req, res) => {
  fs.readdir("./files", function (err, files) {
    if (err) {
      console.error(err);
    }
    console.log();
  });
  res.status(200).render("index");
});

app.listen(port, (err) => {
  if (err) {
    console.error(err);
  }
  console.log(`server  is  running  at http://localhost:${port}`);
});
