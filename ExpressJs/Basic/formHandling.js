import express from "express";

const app = express();

app.set("view engine", "ejs");

//app.use(express.json());// convert row data into json.
app.use(express.urlencoded({ extended: true })); //form support

app.get("/", (req, res) => {
  res.render("index2");
});

app.post("/create", (req, res) => {
  res.send("working");
  console.log(req.body);
});

// app.get("/create", (req, res) => {
//   res.send("form is submmited");
// });

app.listen(3007);
