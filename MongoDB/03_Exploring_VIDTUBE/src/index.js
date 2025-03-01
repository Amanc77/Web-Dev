import dotenv from "dotenv";
import app from "./app.js";
import connenctDB from "./db/index.js";

dotenv.config({
  path: "./.env",
});

console.log("PORT from env:", process.env.PORT);
const PORT = process.env.PORT || 3000;

connenctDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`server is   running on PORT:${PORT}`);
    });
  })
  .catch((err) => {
    console.log("mongodb  connection error", err);
  });
