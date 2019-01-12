const express = require('express');

const db = require('./modelHelpers');

const router = express.Router();

router.get('/', (req, res) => {
  db.getRecipes()
    .then(recipes => {
      res.json(recipes);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

router.post('/', (req, res) => {
  const recipe = req.body;
  db.addRecipe(recipe)
    .then(count => {
      count
        ? res.status(201).json(count)
        : res.status(400).json({ err: 'Recipe could not be added' });
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

module.exports = router;
