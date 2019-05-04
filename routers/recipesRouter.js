const express = require("express");
const router = express.Router();
const db = require("../data/helpers/recipesDBHelpers");

router.get("/", async (req, res) => {
  const recipes = await db.getRecipes();
  try {
    res.status(200).json(recipes);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const recipe = await db.getRecipe(id);
  try {
    res.status(200).json(recipe);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post("/", async (req, res) => {
  const { name, dish_id } = req.body;
  const recipe = { name, dish_id };
  const addedRecipe = await db.addRecipe(recipe);
  try {
    res.status(201).json(addedRecipe);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.delete('/:id', async (req, res) => {
  const deletedRecipe = await db.removeRecipe(req.params.id);
  try {
    res.status(200).json(deletedRecipe);
  } catch (error) {
    res.status(500).json(error);
  }
})

router.put('/:id', (req, res) => {
 const { id } = req.params;
 const { name, dish_id } = req.body;
 const recipe = { name, dish_id};
 console.log(id, recipe);
 db.updateRecipe(id, recipe)
  .then(id => {
    console.log(id);
    res.status(200).json(id)
  })
  .catch(err => res.status(500).json(err));
});

router.get('/:id/ingredients', (req, res) => {
  const { id } = req.params;
  db.getRecipeWithIngredients(id)
    .then(recipes => res.status(200).json([...recipes].filter(recipe => recipe.id <= Math.floor(Math.random() * 14))))
    .catch(err => res.status(500).json(err));
});

router.get('/:id/instructions', (req, res) => {
  const { id } = req.params;
  db.getRecipeWithInstructions(id)
    .then(instructions => res.status(200).json([...instructions].map(ins => ins)))
    .catch(err => res.status(500).json(err));
});

module.exports = router;
