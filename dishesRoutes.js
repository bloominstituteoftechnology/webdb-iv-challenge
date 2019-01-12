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

module.exports = router;
