const express = require("express");
const helmet = require("helmet");
const knex = require("knex");

const dataConfig = require("./knexfile");
const db = knex(dataConfig);

const server = express();

server.use(express.json());
server.use(helmet());

server.get("/", (req, res) => {
  res.send("Hello World");
});

server.get("/api/dishes", (req, res) => {
  db("dishes")
    .then(dish => {
      res.status(200).json(dish);
    })
    .catch(err => {
      console.log("Error: ", err);
      res.status(500).json({ Error: "dishes cannot get retrieved" });
    });
});

server.post();

server.listen(6000, () => console.log("API is running on port 6000"));
