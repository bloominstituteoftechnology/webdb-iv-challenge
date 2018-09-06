const express = require('express');
const dishes = require('../data/helpers/dishDb');

const router = express.Router();

//dish endpoints

//get all dishes
router.get('/', (req, res) => {
  dishes
    .get()
    .then(dishes => res.status(200).json(dishes))
    .catch(err => res.status(500).json(err));
});

//get dish by id
router.get('/:id', (req, res) => {
  const { id } = req.params;

  dishes
    .get(id)
    .then(dish => res.status(200).json(dish))
    .catch(err => res.status(500).json(err));
});

//add a new dish
router.post('/', (req, res) => {
  dishes
    .insert(req.body)
    .then(id => res.status(201).json(id))
    .catch(err => res.status(500).json(err));
});

module.exports = router;
