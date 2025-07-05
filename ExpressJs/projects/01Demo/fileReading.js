const express = require("express");
const app = express();
const path = require("path");
const PORT = 3005;
const fs = require("fs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.send("Welcome to the File Reading App");
  console.log("server is running .......");
});

app.get("/read", (req, res) => {
  const files = `./files`;
  fs.readdir(files, (err, files) => {
    if (err) {
      console.error("Error reading directory:", err);
      res.status(500).send("Error reading directory");
    }
    res.render("read", { files });
    console.log("Files in directory:", files);
  });
});
app.get("/edit/:fileName", (req, res) => {
  const fileName = req.params.fileName;
  fs.readFile(`./files/${fileName}`, "utf-8", (err, data) => {
    if (err) {
      console.error("Error reading file:", err);
      res.status(500).send("Error reading file");
    } else {
      res.render("edit", { fileName, content: data });
      console.log(`Content of ${fileName}:`, data);
    }
  });
});
app.get("/delete/:fileName", (req, res) => {
  const fileName = req.params.fileName;
  fs.unlink(`./files/${fileName}`, (err, data) => {
    if (err) {
      console.error("Error reading file:", err);
      res.status(500).send("Error reading file");
    } else {
      res.redirect("/read");
      console.log(`Content of ${fileName}:`, data);
    }
  });
});

app.get("/show/:fileName", (req, res) => {
  const fileName = req.params.fileName;
  fs.readFile(`./files/${fileName}`, "utf-8", (err, data) => {
    if (err) {
      console.error("Error reading file:", err);
      res.status(500).send("Error reading file");
    } else {
      res.render("showFileData", { fileName, content: data });
      console.log(`Content of ${fileName}:`, data);
    }
  });
});

app.post("/update/:fileName", (req, res) => {
  const fileName = req.params.fileName;
  const newContent = req.body.editedData;
  fs.writeFile(`./files/${fileName}`, newContent, "utf-8", (err) => {
    if (err) {
      console.error("Error writing file:", err);
      res.status(500).send("Error writing file");
    } else {
      console.log(`File ${fileName} updated successfully`);
      res.redirect("/read");
    }
  });
});

app.get("/edit", (req, res) => {
  const fileName = req.params.fileName;
});

app.listen(PORT, () => {
  console.log(`server is  running  on port  ${PORT}`);
});
