const express = require("express");

const app = express();
const path = require("path");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");
const port = 8000;

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/profile/:username", (req, res) => {
  const username = req.params.username;
  res.send(`hello ${username} hou are you.`);
}); // /:usename is a dynamic routing.

app.listen(port, () => {
  console.log(`server is running at http://localhost:${port}`);
});
