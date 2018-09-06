const express = require('express');
const recipes = require('../data/helpers/recipeDb');

const router = express.Router();

//dish endpoints

//get all recipes
router.get('/', (req, res) => {
  recipes
    .get()
    .then(recipes => res.status(200).json(recipes))
    .catch(err => res.status(500).json(err));
});

//get recipe by id
router.get('/:id', (req, res) => {
  const { id } = req.params;

  recipes
    .get(id)
    .then(recipe => res.status(200).json(recipe))
    .catch(err => res.status(500).json(err));
});

//add a new recipe
router.post('/', (req, res) => {
  recipes
    .insert(req.body)
    .then(id => res.status(201).json(id))
    .catch(err => res.status(500).json(err));
});

module.exports = router;
