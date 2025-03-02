import fs from "fs";

fs.writeFile("newfile.txt", "hello i am learning nodejs ", (err) => {
  if (err) {
    console.error(err);
  }
  console.log("done..");
});

fs.rename("newfile.txt", "  tree.txt", (err) => {
  if (err) {
    console.error(err);
  }
  console.log("done..");
});
