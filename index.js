// set up our dependencies
const express = require("express");

// now, activate said dependencies
const server = express();

const db = require("./data/db.js"); // Common JS

server.use(express.json());

server.get("/", (req, res) => {
  res.send("Okay, server is alive.");
});

server.get("/dishes", (req, res) => {
  db.getDishes()
    .then(dish => {
      res.status(200).json(dish);
    })
    .catch(err => res.status(500).json(err));
});

server.listen(6000, () => console.log("server up on 6000 - Happiness now."));
