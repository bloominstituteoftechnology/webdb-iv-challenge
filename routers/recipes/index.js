const express = require("express");
const DB = require("../../data/helpers/helpers");

const router = express.Router();

// get recipes
router.get("/", (req, res) => {
  DB.getRecipes()
    .then(recipes => {
      if (typeof recipes === "object" && recipes.length) {
        res.json({ recipes });
      } else {
        res.status(400).json({ error: "No recipes exist, try again later" });
      }
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: " Please check your connection, ERORR code NORECIPES" });
    });
});

// get a single recipe by id
router.get("/:id", (req, res) => {
  const { id } = req.params;

  DB.getRecipe(id)
    .then(recipe => {
      if (!recipe) {
        res.status(400).json({ error: "recipe not found" });
      } else {
        DB.getRecipeIngredients(id).then(ingredients => {
          const fullRecipe = Object.assign({}, ...recipe, { ingredients });
          res.json({ recipe: fullRecipe });
        });
      }
    })
    .catch(err => {
      res.status(500).json({ error: "ERROR code NORECIDF" });
    });
});

// add a recipe
router.post("/", (req, res) => {
  const { recipe } = req.body;

  DB.addRecipe(recipe)
    .then(result => {
      if (result.length) {
        DB.getRecipe(result[0])
          .then(newRecipe => {
            res.status(201).json({ recipe: newRecipe });
          })
          .catch(err => {
            res.status(500).json({
              error: "Please check your connection. ERROR code NOEDIRECIP"
            });
          });
      } else {
        res
          .status(401)
          .json({ error: "Please check your input and submit again." });
      }
    })
    .catch(err => {
      res.status(500).json({ error: "ERROR code NONEWREC" });
    });
});

module.exports = router;
