const express = require("express");
const knex = require("knex");

const knexConfig = require("./knexfile.js");

const db = knex(knexConfig.development);

const server = express();

server.use(express.json());


// GET

server.get("/api/recipes", (req, res) => {
    db("recipes")
      .then(recipes => {
          res.status(200).json(recipes)
      })
      .catch(err => {
          res.status(500).json(err)
      });
  });

// GET BY ID
  
  server.get("/api/recipes/:id/ingredients", (req, res) => {
    const { id } = req.params;
    console.log(id);
    db("recipes")
      .where({ id: id })
      .then(recipes => {
          res.status(200).json(recipes.ingredients)
      })
      .catch(err => {
          res.status(500).json({ error: err })
      });
  });

  server.get("/api/ingredients", (req, res) => {
    db("ingredients")
      .then(ingredients => {
          res.status(200).json(ingredients)
      })
      .catch(err => {
          res.status(500).json(err)
      });
  });










server.listen(8000, () => console.log("\n== Port 8k ==\n"));