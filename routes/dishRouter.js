const express = require('express')

const router = express.Router()

const db = require('../data/db')

router.get('/', (req, res) => {
  db('dishes')
    .select('name as dish')
    .then(dishes => res.status(200).json(dishes))
    .catch(err => res.status(500).json(err))
})

router.get('/:id', (req, res) => {
  const { id } = req.params
  db('dishes')
    .select('dishes.name as dish', 'recipes.name as recipe')
    .join('recipes', 'recipes.dishId', 'dishes.id')
    .where('dishes.id', id)
    .then(recipeList => res.status(200).json(recipeList))
    .catch(err => res.status(500).json(err))
})

router.post('/', (req, res) => {
  const dish = req.body
  console.log('DISH ', dish)

  db('dishes')
    .insert(dish)
    .then(([id]) => {
      db('dishes')
        .where({ id })
        .then(dish => res.status(200).json(dish))
        .catch(err => res.status(500).json(err))
    })
    .catch(err => res.status(500).json(err))
})

module.exports = router
