const router = require('express').Router();
const db = require('../db/db');

router.get('/', (req, res) => {
  db.getRecipes()
    .then(recipes => res.status(200).json(recipes))
    .catch(err => res.status(500).json(err));
});

router.get('/:id', (req, res) => {
  db.getRecipe(req.params.id)
    .then(recipe => res.status(200).json(recipe))
    .catch(err => res.status(500).json(err));
});

router.get('/:id/shop', (req, res) => {
  db.getShoppingList(req.params.id)
    .then(list => res.status(200).json(list))
    // .catch(err => res.status(500).json(err));
});

router.post('/', (req, res) => {
  db.addRecipe(req.body)
    .then(id => res.status(201).json(id))
    .catch(err => res.status(500).json(err));
});

module.exports = router;