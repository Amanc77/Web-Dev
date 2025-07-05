import express from "express";
import ejs from "ejs";
import fs from "fs";
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

// Serve static files (optional for future assets)
app.use(express.static(path.join(__dirname, "public")));

// Ensure files directory exists
const filesDir = path.join(__dirname, "files");
if (!fs.existsSync(filesDir)) {
  fs.mkdirSync(filesDir);
}

app.get("/", (req, res) => {
  fs.readdir(filesDir, (err, files) => {
    if (err) {
      console.error("Error reading directory:", err);
      res.status(500).send("Error reading directory");
    } else {
      res.render("index", { files });
    }
  });
});

app.get("/view/:fileName", (req, res) => {
  const fileName = req.params.fileName;
  fs.readFile(path.join(filesDir, fileName), "utf8", (err, data) => {
    if (err) {
      console.error("Error reading file:", err);
      res.status(500).send("Error reading file");
    } else {
      res.render("viewData", { content: data, fileName });
    }
  });
});

app.get("/createTodaysRecord", (req, res) => {
  const fileName = currentDateTime() + ".txt";
  fs.writeFile(path.join(filesDir, fileName), "Today's record", (err) => {
    if (err) {
      console.error("Error creating today's record:", err);
      res.status(500).send("Error creating today's record");
    } else {
      console.log(`Today's record created: ${fileName}`);
      res.redirect("/");
    }
  });
});

app.get("/edit/:fileName", (req, res) => {
  const fileName = req.params.fileName;
  fs.readFile(path.join(filesDir, fileName), "utf8", (err, data) => {
    if (err) {
      console.error("Error reading file:", err);
      res.status(500).send("Error reading file");
    } else {
      res.render("editFile", { content: data, fileName });
    }
  });
});

app.post("/update/:fileName", (req, res) => {
  const fileName = req.params.fileName;
  const content = req.body.editedData || ""; // Match editFile.ejs textarea name
  fs.writeFile(path.join(filesDir, fileName), content, "utf8", (err) => {
    if (err) {
      console.error("Error writing file:", err);
      res.status(500).send("Error writing file");
    } else {
      res.redirect(`/view/${fileName}?success=true`);
    }
  });
});

app.get("/create", (req, res) => {
  res.render("createFile");
});

app.post("/create", (req, res) => {
  const fileName = req.body.fileName + ".txt";
  const content = req.body.content || "";
  fs.writeFile(path.join(filesDir, fileName), content, "utf8", (err) => {
    if (err) {
      console.error("Error creating file:", err);
      res.status(500).send("Error creating file");
    } else {
      res.redirect("/");
    }
  });
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.get("/delete/:fileName", (req, res) => {
  const fileName = req.params.fileName;
  fs.unlink(path.join(filesDir, fileName), (err) => {
    if (err) {
      console.error("Error deleting file:", err);
      res.status(500).send("Error deleting file");
    } else {
      res.redirect("/");
    }
  });
});

app.listen(PORT, () => {
  console.log(
    `Server is running on port ${PORT} at ${new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
    })} IST`
  );
});

function currentDateTime() {
  const now = new Date();
  const dd = String(now.getDate()).padStart(2, "0");
  const mm = String(now.getMonth() + 1).padStart(2, "0"); // Months are 0-based
  const yyyy = now.getFullYear();
  let hh = now.getHours();
  const min = String(now.getMinutes()).padStart(2, "0");
  const ss = String(now.getSeconds()).padStart(2, "0");
  const ampm = hh >= 12 ? "PM" : "AM";
  hh = hh % 12;
  hh = hh ? hh : 12;
  hh = String(hh).padStart(2, "0");
  return `${dd}-${mm}-${yyyy}_${hh}-${min}-${ss}-${ampm}`;
}
