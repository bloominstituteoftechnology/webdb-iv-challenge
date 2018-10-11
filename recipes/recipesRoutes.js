const express = require('express');

const recipes = require('./recipesModel.js');

const router = express.Router();


router.get('/', (req, res) => {
  recipes
    .getRecipes()
    .then(recipes => {
      res.status(200).json(recipes);
    })
    .catch(err => res.status(500).json(err));
});

router.post('/', (req, res) => {
  const recipe = req.body;

  recipes
    .addRecipe(recipe)
    .then(ids => {
      res.status(201).json(ids[0]);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});


module.exports = router;
