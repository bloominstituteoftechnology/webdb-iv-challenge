const express = require('express');

const recipeModel = require('../recipeModel');

const router = express.Router();

router.get('/', (req, res) => {
  recipeModel
    .get()
    .then(resp => res.status(200).json(resp))
    .catch(err => res.status(500).json({ message: 'Bad Request' }));
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  recipeModel
    .getById(id)
    .then(resp => res.status(200).json(resp))
    .catch(err => res.status(500).json({ message: 'Bad Request' }));
});

router.post('/', (req, res) => {
  const dish = req.body;
  recipeModel
    .addDish(dish)
    .then(ids => res.status(200).json(ids))
    .catch(err => res.status(500).json({ message: 'Bad Request' }));
});

router.get('/recipes/all', (req, res) => {
  recipeModel
    .allRecipes()
    .then(resp => res.status(200).json(resp))
    .catch(err => res.status(500).json({ message: 'Bad Request' }));
});

router.get('/recipes/join', (req, res) => {
  recipeModel
    .getRecipes()
    .then(resp => res.status(200).json(resp))
    .catch(err => res.status(500).json({ message: 'Bad Request' }));
});

router.post('/recipes', (req, res) => {
  const recipe = req.body;
  recipeModel
    .addRecipe(recipe)
    .then(ids => res.status(200).json(ids))
    .catch(err => res.status(500).json({ message: 'Bad Request' }));
});

module.exports = router;
