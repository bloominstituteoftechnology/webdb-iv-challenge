const express = require("express");
const helmet = require("helmet");
// const knex = require('knex');
const server = express();
const db = require("./db/helpers");

server.use(express.json());
server.use(helmet());

server.get("/", (req, res) => {
  res.send("hi it worked");
});

server.get("/dishes", async (req, res) => {
  try {
    const dishes = await db.getDishes();
    res.status(200).json(dishes);
  } catch (err) {
    res.status(500).json(err);
  }
});

server.get("/dishes/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const dish = await db.getDishes(id);
    res.status(200).json(dish);
  } catch (err) {
    res.status(500).json(err);
  }
});

server.post("/dishes", async (req, res) => {
  const { name } = req.body;

  if (!name.length) res.status(400).json({ err: "please enter a name" });

  try {
    const newDish = await db.addDish({ name });
    res.status(200).json(newDish);
  } catch (err) {
    res.status(500).json(err);
  }
});

server.get("/ingredients", async (req, res) => {
  try {
    const ingredients = await db.getIngredients();
    res.status(200).json(ingredients);
  } catch (err) {
    res.status(500).json(err);
  }
});

server.get("/recipes", async (req, res) => {
  try {
    const recipes = await db.getRecipes();

    res.status(200).json({ recipes });
  } catch (err) {
    res.status(500).json(err);
  }
});

server.post("/recipes", async (req, res) => {
  const { name } = req.body;

  if (!name.length) res.status(400).json({ err: "please enter a name" });

  try {
    const newRecipe = await db.addRecipe({ name });
    res.status(200).json(newRecipe);
  } catch (err) {
    res.status(500).json(err);
  }
});

// getRecipes(): should return a list of all recipes in the database including the dish they belong to.
// addRecipe(recipe): should add a recipe to the database and return the id of the new recipe.
const port = 8000;
server.listen(
  port,
  console.log(`\n ===> Server is running on port:${port} <=== \n`)
);
