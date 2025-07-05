const express = require("express");
const app = express();
const path = require("path");
const PORT = 3000;
const fs = require("fs");
app.use(express.static(path.join(__dirname, "public")));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
  console.log("server is running .......");
});

app.get("/create", (req, res) => {
  const now = new Date();

  const dd = String(now.getDate()).padStart(2, "0");
  const mm = String(now.getMonth() + 1).padStart(2, "0");
  const yyyy = now.getFullYear();

  let hh = now.getHours();
  const min = String(now.getMinutes()).padStart(2, "0");
  const ampm = hh >= 12 ? "PM" : "AM";

  hh = hh % 12;
  hh = hh ? hh : 12; // 0 becomes 12
  hh = String(hh).padStart(2, "0");

  const fileName = `${dd}-${mm}-${yyyy}_${hh}-${min}-${ampm}.txt`;

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
  console.log(`server is  running on port  ${PORT}`);
});
