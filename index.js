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

server.get("/recipes", (req, res) => {
  recipeDb
    .getRecipes()
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.status(500).json({ message: "could not get those recipes" });
    });
});

server.post("/recipes", (req, res) => {
  const newRecipe = req.body;
  recipeDb
    .addRecipe(newRecipe)
    .then(recipe => {
      res.json({ message: `new recipe with id ${recipe.id} has been created` });
    })
    .catch(err => {
      res.status(500).json({ message: "could not create new recipe" });
    });
});

server.get("/recipes/:id/shoppinglist", (req, res) => {
  const { id } = req.params;
  recipeDb
    .getList(id)
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.status(500).json({ message: "could not create shopping list." });
    });
});

server.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
