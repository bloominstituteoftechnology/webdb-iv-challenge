const express = require('express');

const db = require('./modelHelpers');

const router = express.Router();

router.get('/', (req, res) => {
  //   db('dishes')
  db.getDishes()
    .then(dishes => {
      res.json(dishes);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  db.getDish(id)
    .then(dish => {
      res.json(dish);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

router.post('/', (req, res) => {
  const dish = req.body;
  db.addDish(dish)
    .then(count => {
      count
        ? res.status(201).json(count)
        : res.status(400).json({ err: 'Dish could not be added' });
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

module.exports = router;
