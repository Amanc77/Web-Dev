import fs from "fs";

fs.write("newfile.txt", "hello i am learning nodejs ", (err) => {
  if (err) {
    console.error(err);
  }
  console.log("done..");
});
