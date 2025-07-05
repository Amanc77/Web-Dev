import express from "express";
import ejs from "ejs";
import fs from "fs";
import { fileURLToPath } from "url";
import path from "path";

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  const fileName = currentDateTime() + ".txt";
  console.log("File name:", fileName);

  fs.writeFile(
    `./files/${fileName}`,
    "testing by writing some random text",
    (err) => {
      if (err) {
        console.error("Error writing file:", err);
        res.status(500).send("Error creating file");
      } else {
        console.log(`File created: ${fileName}`);
        res.send(`File created: ${fileName}`);
      }
    }
  );
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
function currentDateTime() {
  const now = new Date();

  const dd = String(now.getDate()).padStart(2, "0");
  const mm = String(now.getMonth() + 1).padStart(2, "0"); // Months are 0-based, so +1
  const yyyy = now.getFullYear();

  let hh = now.getHours();
  const min = String(now.getMinutes()).padStart(2, "0");
  const ss = String(now.getSeconds()).padStart(2, "0"); // Added seconds
  const ampm = hh >= 12 ? "PM" : "AM";

  hh = hh % 12;
  hh = hh ? hh : 12; // 0 becomes 12
  hh = String(hh).padStart(2, "0");

  return `${dd}-${mm}-${yyyy}_${hh}-${min}-${ss}-${ampm}`;
}
