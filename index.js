const express = require("express");
const db = require("./data/db");
const server = express();
server.use(express.json());

server.get("/", (req, res) => {
  res.send("working...");
});

server.get("/dishes", (req, res) => {
  db("dishes").then(dishes => {
    res.status(200).json(dishes);
  });
});

const port = 9000;
server.listen(port, function() {
  console.log(`Web API listening on http://localhost:${port}`);
});
