const express = require("express");
const server = express();
const knex = require("knex");
const dbConfig = require("./knexfile");

const db = knex(dbConfig.developement);

server.use(express.json());

server.get("/", (req, res) => {
  res.send("Hello World");
});

server.post("/api/dishes", (req, res) => {
  const dishes = req.body;

  db.insert(dishes)
    .into("dishes")
    .then(id => {
      res.status(201).json(id);
    })
    .catch(err => res.status(500).json(err));
});

server.get("/api/dishes", (req, res) => {
    db("dishes")
        .then(dishes => {
            res.status(200).json(dishes)
        })
        .catch(err => res.status(500).json(err));
});


server.listen(8000, () => console.log("API running on port 8000"));
