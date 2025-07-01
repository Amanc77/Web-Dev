import fs from "fs";

fs.writeFile("one.txt", "I am learning nodejs", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("file is created.");
  }
});
