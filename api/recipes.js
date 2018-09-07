const router = require('express').Router();
const db = require('../db/db');

router.get('/', (req, res) => {
  db.getRecipes()
    .then(recipes => res.status(200).json(recipes))
    // .catch(err => res.status(500).json(err));
});

router.get('/:id', (req, res) => {
  
});

router.post('/', (req, res) => {
  
});

module.exports = router;