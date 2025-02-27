import express from "express";
import "dotenv/config";

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello i am learning Backend... ");
});
app.get("/twitter", (req, res) => {
  res.send("x.com/Amanc77");
});
app.get("/linkedin", (req, res) => {
  res.send("linkedin.com.in/amanc77");
});

app.use(express.json());
let teaData = [];
let next = 1;

app.post("/teas", (req, res) => {
  const { name, price } = req.body;
  const newtea = { id: next++, name, price };
  teaData.push(newtea);

  res.status(200).send(newtea);
});

app.get("/teas", (req, res) => {
  res.status(200).send(teaData);
});

app.get("/teas/:id", (req, res) => {
  const tea = teaData.find((t) => t.id === parseInt(req.params.id));
  if (!tea) {
    return res.status(404).send("tea not found");
  } else {
    return res.status(200).send(tea);
  }
});

// update tea
app.put("/teas/:id", (req, res) => {
  const tea = teaData.find((t) => t.id === parseInt(req.params.id));
  if (!tea) {
    return res.status(404).send("tea not found");
  }
  const { name, price } = req.body;
  tea.name = name;
  tea.price = price;
  res.status(200).send(tea);
});

//delete tea

app.delete("/teas/:id", (req, res) => {
  const index = teaData.findIndex((t) => t.id === parseInt(req.params.id));
  if (index === -1) {
    return res.status(404).send("tea not found");
  } else {
    teaData.splice(index, 1);
    return res.status(200).send("deleted...");
  }
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
