const http = require("http");
const hostname = "127.0.0.1";

const port = 3000;

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("hello this is aman this side.");
  } else if (req.url === "/aman") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("my name is aman");
  } else {
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/plain");
    res.end("404 is not found");
  }
});

server.listen(port, hostname, () => {
  console.log(`server is listen http://${hostname}:${port}`);
});
