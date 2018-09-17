const express = require("express");
const helmet = require("helmet");
const knex = require("knex");

const dataConfig = require("./knexfile.js");
const db = knex(dataConfig.development);
//==============================================================================//
const database = require("./db/dbHelpers");

const server = express();

server.use(express.json());
server.use(helmet());
//======================================Dishes================================================//
server.get("/dish", (req, res) => {
  try {
    const dishes = database.getDishes();
    res.status(200).json(dishes);
  } catch (err) {
    res.status(500).json({ Error: "The request could not be retrieved" });
  }
});

server.get("/dish/:id", (req, res) => {
  const { id } = req.params;
  try {
    const dish = database.getDish(id);
    res.status(200).json(dish);
  } catch (err) {
    res.status(500).json({ Error: "Request for id did not work" });
  }
});

server.post("/dish", (req, res) => {
  const dish = req.body;
  try {
    const id = database.addDish(dish);
    res.status(200).json(id);
  } catch (err) {
    res.status(500).json({ Error: "The post does not work" });
  }
});
//======================================Dishes================================================//
//=====================================Recipes===============================================//
server.get("/recipes", (req, res) => {
  try {
    const recipes = database.getRecipes();
    res.status(200).json(recipes);
  } catch (err) {
    res.status(500).json({ Error: "Cannot get recipes" });
  }
});

server.get('/recipes/:id', (req, res) => {
  const { id } = req.params;
  try {
    const recipe = database.getRecipes(id);
    res.status(200).json(recipe);
  } catch (err) {
    res.status(500).json({ Error: "Cannot get recipes with id" });
  }
});

server.post("/recipes", (req, res) => {
  const recipe = req.body;
  try {
    const id = database.addRecipe(recipe);
    res.status(200).json(id);
  } catch (err) {
    res.status(500).json({ Error: "Cannot post to recipe" });
  }
});
//=====================================Recipes===============================================//
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

server.get("/api/dishes/:id", (req, res) => {
  const { id } = req.params;
  db("dishes")
    .select("name")
    .where({ id })
    .then(dish => {
      res.status(200).json(dish);
    })
    .catch(err => {
      console.log("Error: ", err);
      res.status(500).json({ Error: "Dish cannot be retrieved" });
    });
});

server.post("/api/dishes", (req, res) => {
  const dishes = req.body;
  db.insert(dishes)
    .into("dishes")
    .then(id => {
      res.status(201).json(id);
    })
    .catch(err => {
      console.log("Error: ", err);
      res.status(500).json({ Error: "Pass in " });
    });
});

server.put("/api/dishes/:id", (req, res) => {
  const changes = req.body;
  const { id } = req.params;
  db("dishes")
    .where({ id })
    .update(changes)
    .then(count => {
      res.status(200).json(count);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

server.delete("/api/dishes/:id", (req, res) => {
  const { id } = req.params;

  db("dishes")
    .where({ id })
    .del()
    .then(count => {
      res.status(200).json(count);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

server.listen(6000, () => console.log("API is running on port 6000"));
