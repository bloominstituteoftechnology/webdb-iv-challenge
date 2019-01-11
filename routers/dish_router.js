const express = require('express');
const router = express.Router();
const knex = require('knex');
const dbConfig = require('../knexfile');
const db = knex(dbConfig.development);

router.use((req, res, next) => {
    next();
});

router.get('/', (req, res) => {
  db('dish')
  
  .then(dishes => {
      res.json(dishes);
  })
  .catch(err => {
      res.status(500).json({err: "Failed to find dishes"});
  })
});

module.exports = router;