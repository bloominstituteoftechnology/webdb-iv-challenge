const express = require('express');

const db = require('./dishes_Model');

const router = express.Router();

// GET dishes from database
router.get('/', (req, res) => {
  db.get_dishes()
    .then(dishes => {
      res.status(200).json(dishes);
    })
    .catch(err => {
      res.status(500).json({ errorMessage: 'Dish could not be retrieved from database' });
    });
});

// POST - new dish
router.post('/', (req, res) => {
  const new_dish = req.body;

  if (newDish.name) {
    db.insert(new_dish)
      .then(dish => {
        res.status(201).json(dish);
      })
      .catch(err => {
        res.status(500).json({ errorMessage: 'Dish could not be saved.' });
      });
  } else {
    res.status(400).json({ errorMessage: 'Dish needs name to be added.' });
  }
});

module.exports = router;