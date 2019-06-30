
const express = require('express');
const dishes = require('./dishesModel.js');
const router = express.Router();

// get a list of courses
router.get('/', (req, res) => {
  dishes
    .find()
    .then(dish => {
      res.status(200).json(dish);
    })
    .catch(err => res.status(500).json(err));
});


module.exports = router;
