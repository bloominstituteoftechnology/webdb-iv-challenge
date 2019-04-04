const express = require('express');

const db = require('./recipes_model');

const router = express.Router();

// GET recipes
router.get('/', (req, res) => {
  db.get_recipes()
    .then(recipes => {
      res.status(200).json(recipes);
    })
    .catch(err => {
      res.status(500).json({ errorMessage: 'Recipes could not be retrieved.' });
    });
});

// POST new recipe
router.post('/', (req, res) => {
  const new_recipe = req.body;

  if (newRecipe.name) {
    db.insert(new_recipe)
      .then(recipe => {
        res.status(201).json(recipe);
      })
      .catch(err => {
        res.status(500).json({ errorMessage: 'Could not save recipe.' });
      });
  } else {
    res.status(400).json({ errorMessage: 'Name required to add recipe.' });
  }
});

module.exports = router;