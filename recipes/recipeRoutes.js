const express = require('express');
const recipeDb = require('../helpers/recipeDb.js');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const recipes = await recipeDb.getRecipes();
    res.status(200).json(recipes);
  } catch (err) {
    res.status(500).send({ error: 'The recipes information could not be retrieved.' })
  }
});

router.get('/:id', async (req, res) => {
  try {
    const recipe = await recipeDb.getRecipe(req.params.id);
    if (recipe.length === 0) {
      res.status(404).send({ error: 'The recipe with the specified ID does not exist.'});
    } else {
      res.status(200).json(recipe);
    }
  } catch (err) {
    res.status(500).send({ error: 'The recipe information could not be retrieved.' });
  }
});

module.exports = router;