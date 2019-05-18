const express = require("express");
const server = express();
const recipeDb = require("./data/helpers/recipeDb");

server.use(express.json());

server.get("/dishes", (req, res) => {
  recipeDb
    .getDishes()
    .then(dish => {
      res.status(200).json(dish);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

server.post("./dishes", (req, res) => {
  const dish = req.body;
  recipeDb
    .addDish(dish)
    .then(dish => {
      res.status(201).json(dish);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

server.listen(5000, () => console.log("\n== Port 5k ==\n"));
