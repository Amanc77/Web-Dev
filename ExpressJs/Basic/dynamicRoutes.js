import express from "express";

const app = express();

app.get("/", function (req, res) {
  res.send("server is running......");
  console.log("server is running .......");
});
app.get("/:url", (req, res) => {
  const name = req.params.url;

  res.send(`url name is ${name} `);
  console.log(`url name is ${name} `);
});
app.get("/player/:name", (req, res) => {
  const name = req.params.name;

  res.send(`player name is ${name} `);
  console.log(`player name is ${name} `);
});
app.get("/player/:name/:age", (req, res) => {
  const name = req.params.name;
  const age = req.params.age;

  res.send(`player name is ${name} and his age is ${age}`);
  console.log(`player name is ${name} and his age is ${age}`);
});
app.listen(3004);
