import http from "http";

const server = http.createServer(function (req, res) {
  res.write("Server is running on port no 3003");
  res.end();
});

server.listen(3003, () => {
  console.log("Server is listening on port 3003");
});
