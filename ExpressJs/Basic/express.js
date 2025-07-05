// import express from "express";
import express from "express";

import expressSession from "express-session";
import flash from "connect-flash";

const port = 3000;

const app = express();

app.use(
  expressSession({
    secret: "this is random secret",
    resave: false,
    saveUninitialized: false,
  })
);

app.use(flash());

app.get("/", function (req, res) {
  req.flash("error", "invalid error");

  res.redirect("/newRoute");
});

app.get("/newRoute", (req, res, next) => {
  const message = req.flash("error");
  res.send(message);
  console.log(message);
  next();
});

app.get("/about", (req, res) => {
  res.send("this is about route");
});

app.get("/create", (req, res, next) => {
  req.session.newid = true;
  res.send("done");
});
app.get("/check", (req, res, next) => {
  const data = req.session.newid;
  res.send("data is modified");
  console.log(data);
});

app.listen(port, () => {
  console.log(`app is running on port no ${port}`);
});
