const express = require("express");
const server = express();
const dishDb = require("./data/helpers/dishDb");
const recipeDb = require("./data/helpers/recipeDb");

const PORT = 5050;

server.use(express.json());

server.get("/dishes", (req, res) => {
  dishDb
    .getDishes()
    .then(dishes => {
      res.json(dishes);
    })
    .catch(err => {
      res.status(500).json({ message: "something is not right here" });
    });
});

server.post("/dishes", (req, res) => {
  const newDish = req.body;
  dishDb
    .addDish(newDish)
    .then(dish => {
      res.json({ message: `new dish with id ${dish.id} created` });
    })
    .catch(err => {
      res.status(500).json({ message: "could not create dish" });
    });
});

server.get("/dishes/:id", (req, res) => {
  const { id } = req.params;
  dishDb
    .getDish(id)
    .then(response => {
      res.json(response);
    })
    .catch(err => {
      res
        .status(500)
        .json({ message: "you probably wrote this one incorrectly" });
    });
});

server.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
