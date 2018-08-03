const express = require('express')

const router = express.Router()

const db = require('../utilities/db-helper')

router.get('/', (req, res) => {
  db.getRecipes()
    .then(recipes => {
      console.log('RECIPES', recipes)
      res.status(200).json(recipes)
    })
    .catch(err => res.status(500).json(err))
})

router.get('/:id', (req, res) => {
  const { id } = req.params
  db.getRecipe(id)
    .then(recipe => {
      console.log('RECIPE: ', recipe)
      res.status(200).json(recipe)
    })
    .catch(err => res.status(500).json(err))
})

module.exports = router
