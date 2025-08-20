const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  fs.readFile("hello.txt", "utf8", (err, data) => {
    if (err) {
      res.writeHead(404, { "Content-Type": "text/plain" });
      return res.end("File not found");
    }
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end(data);
  });
});

server.listen(4000, () => {
  console.log("Server running at http://localhost:4000");
});
