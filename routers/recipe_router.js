const express = require('express');
const router = express.Router();
const knex = require('knex');
const dbConfig = require('../knexfile');
const db = knex(dbConfig.development);

router.use((req, res, next) => {
    next();
});

router.get('/', (req, res) => {
  db('recipe')
  
  .then(recipes => {
      res.json(recipes);
  })
  .catch(err => {
      res.status(500).json({err: "Failed to find recipes"});
  })
});

module.exports = router;