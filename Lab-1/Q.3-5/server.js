const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.write("Welcome! This is Node server.\n");
  res.write(`URL: ${req.url}\n`);
  res.write(`Method: ${req.method}\n`);
  res.end("Done!");
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
