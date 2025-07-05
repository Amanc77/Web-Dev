import express from "express";

const app = express();
app.set("view engine", "ejs");
app.get("/", function (req, res) {
  res.render("index");
  console.log(`app is running as index.ejs file`);
});
app.get("/user", function (req, res) {
  res.render("user");
  console.log(`app is running as user.ejs file`);
});
app.get("/profile", function (req, res) {
  res.render("profile");
  console.log(`app  is running as profile.ejs file`);
});

app.listen(3003);
