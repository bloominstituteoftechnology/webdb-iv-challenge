const express = require("express");
const knex = require("knex");

const dbConfig = require("./knexfile.js");

const server = express();
const db = knex(dbConfig.development);

const dishes = require("./helpers/dishes_helper");

const PORT = 5678;

server.use(express.json());

server.get("/api/dishes", (req, res) => {
   dishes.getDishes()
      .then(dishes => {
         res.json(dishes)
      })
      .catch(err => {
         res.status(500).json({err: "error retrieving dishes"});
      })
});

server.get("/api/dishes/:id", (req, res) => {
   const {id} = req.params;
   dishes.getDish(id)
      .then(dish => {
         dish.length > 0 ? res.json(dish)
         : res.status(404).json({err: `the dish with the id ${id} does not exist`});
      })
      .catch(err => {res.status(500).json({err: "error retrieving dish"})});
});

server.post("/api/dishes", (req, res) => {
   const dish = req.body;
   dish.dish_name ?
   dishes.addDish(dish)
      .then(dishId => {
         res.status(201).json(dishId.id)
      })
      .catch(err => {res.status(500).json({err: "error adding new dish"})})
   :  res.status(400).json({err: "please provide a dish_name"});
});

server.listen(PORT, () => {
   console.log(`server is up and running on port ${PORT}`);
});