const express = require("express");

const dishes = require('./dishes.js');
const recipes = require('./recipes.js');

const server = express();

server.use(express.json());

server.get("/dishes", (req, res) => {
    dishes
      .getDishes()
      .then(dishes => {
        res.status(200).json(dishes);
      })
      .catch(error => res.status(500).json(error));
  });

server.get("/dishes/:id", (req, res) => {
  const { id } = req.params;
  dishes
    .getDish(id)
    .then(dish => {
      if (!dish) {
        return res.status(404).json({
          message: "Can not find dish with specified ID."
        });
      }
      res.status(200).json(dish);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

server.post("/dishes", (req, res) => {
  const { name } = req.body;
  const dish = { name };
  if (!name) {
    return res.status(400).send({
      errorMessage: "Please provide a name for the dish."
    });
  }
  dishes
    .addDish(dish)
    .then(ids => {
      res.status(201).json(ids);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

// recipes
server.get("/recipes", (req, res) => {
    recipes
      .getRecipes()
      .then(recipes => {
        res.status(200).json(recipes);
      })
      .catch(error => res.status(500).json(error));
  });
  
  server.post("/recipes", (req, res) => {
    const { name, dish_id } = req.body;
    const recipe = { name, dish_id };
  
    if (!name || !dish_id) {
      return res.status(400).send({
        errorMessage: "Please provide a name and a dish id for the recipe."
      });
    }
    recipes
      .addRecipe(recipe)
      .then(ids => {
        res.status(201).json(ids);
      })
      .catch(error => {
        res.status(500).json(error);
      });
  });

const port = 8000;

server.listen(port, () => console.log(`\nAPI running on port ${port}\n`));
