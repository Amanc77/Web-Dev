//httpServer module

import httpServer from "http";

const port = 3073;

const server = httpServer.createServer(function (req, res) {
  if (req.url === "/") {
    res.end("hey  this is / url");
  } else if (req.url === "/profile") {
    res.end("this is profile section");
  } else {
    res.end("page not found");
  }
});

server.listen(port, () => {
  console.log(`server is running at port http://localhost:${port}`);
});
