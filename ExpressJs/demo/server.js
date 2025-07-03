import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("server is running");
});
app.post("/", (req, res) => {
  res.send("post part");
});
app.put("/", (req, res) => {
  res.send("put part");
});
app.patch("/", (req, res) => {
  res.send("patch part");
});
app.delete("/", (req, res) => {
  res.send("delete part");
});

app.listen(3008);
