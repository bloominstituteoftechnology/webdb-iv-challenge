//dependency imports
const express = require("express");

//in-app imports
const db = require("./data/db");

//init server
const server = express();

//middleware
server.use(express.json());

//endpoints
server.get("/", (req, res) => {
  res.json({ server: "listening" });
});

server.get("/api/dishes", (req, res) => {
  db.getDishes()
    .then(dishes => {
      res.status(200).json(dishes);
    })
    .catch(err => res.status(500).json({ error: "Couldn't retrieve dishes." }));
});

server.listen(7000, () =>
  console.log("\n===Server listening on port 7000===\n")
);
