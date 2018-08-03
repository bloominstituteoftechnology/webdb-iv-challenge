const express = require("express");
// const db = require("./data/db");
const dishesDb = require("./helpers/dishesDb");
const recipiesDb = require("./helpers/recipiesDb");
const ingredientsDb = require("./helpers/ingredientsDb");
const server = express();
server.use(express.json());

server.get("/", (req, res) => {
  res.send("working...");
});

server.get("/dishes", (req, res) => {
  dishesDb.getDishes().then(dishes => {
    res.status(200).json(dishes);
  });
});

server.get("/dishes/:id", (req, res) => {
  dishesDb.getDish(req.params.id).then(dish => {
    console.log(dish);
    res.status(200).json(dish);
  });
});

server.post("/dishes", (req, res) => {
  const dish = req.body;
  dishesDb.addDish(dish).then(dish => res.status(201).json(dish));
});
//no name, name is deault to not provided

server.get("/recipies", (req, res) => {
  recipiesDb.getRecipies().then(recipies => {
    res.status(200).json(recipies);
  });
});

server.get("/ingredients", (req, res) => {
  ingredientsDb.getIngredients().then(ingredients => {
    res.status(200).json(ingredients);
  });
});

const port = 9000;
server.listen(port, function() {
  console.log(`Web API listening on http://localhost:${port}`);
});
