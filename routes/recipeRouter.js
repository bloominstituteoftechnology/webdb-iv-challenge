const express = require('express')

const router = express.Router()

const db = require('../data/db')

router.get('/', (req, res) => {
  db('recipes')
    .select('recipes.name as recipe', 'dishes.name as dish')
    .join('dishes', 'dishes.id', 'recipes.dishId')
    .then(recipes => res.status(200).json(recipes))
    .catch(err => res.status(500).json(err))
})

module.exports = router
