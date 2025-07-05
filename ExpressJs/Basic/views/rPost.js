import express from "express";

const app = express();

const data = [1, 3, 4, 5, 6, 7, 8, 9, 10];

// Base route
app.get("/", (req, res) => {
  res.send("server is running");
});

// Get full data array
app.get("/data", (req, res) => {
  res.send(data);
});

// Add a number to the array
app.post("/data/:number", (req, res) => {
  const num = parseInt(req.params.number, 10);
  data.push(num);
  console.log(typeof num); // Should show 'number'
  res.send(data); // Return updated array
});

// Start the server
app.listen(3052, () => {
  console.log("Server is running on http://localhost:3052");
});
