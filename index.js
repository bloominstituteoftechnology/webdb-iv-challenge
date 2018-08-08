const express = require("express");
const recipes = require("./data/helpers");

const db = require("./data/db");

const server = express();

server.use(express.json());

// endpoints here

server.get("/", (req, res) => {
  res.send("up and running...");
});

//* FInd by id with created method getRecipe()
server.get("/recipes/:recipeId", (req, res) => {
  const { recipeId } = req.params;
  recipes
    .getRecipe(recipeId)
    .then(recipe => {
      if (recipe === 0) {
        return res
          .status(404)
          .json({ message: "The recipe with that id cant be found" });
      }
      res.status(200).json(recipe);
    })
    .catch(err =>
      res
        .status(500)
        .json({ error: "The recipe information could not be retrieved." })
    );
});

const port = 3300;
server.listen(port, function() {
  console.log(`\n=== Web API Listening on http://localhost:${port} ===\n`);
});
