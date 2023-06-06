require('dotenv').config();
const http = require('http');

const port = process.env.PORT;
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Vlad, Hope you are good?');
});

server.listen(port, () => {
  console.log(`Server running.`);
});
