const express = require('express')

const router = express.Router()

const db = require('../utilities/db-helper')

router.get('/', (req, res) => {
  db
    .getRecipes()
    .then(recipes => {
      res.status(200).json(recipes)
    })
    .catch(err => res.status(500).json(err))
})

router.get('/:id', (req, res) => {
  const { id } = req.params
  db
    .getRecipe(id)
    .then(recipe => {
      res.status(200).json({
        dish: recipe[0][0].dish,
        recipe: recipe[0][0].recipe,
        ingredients: recipe[1],
        instructions: recipe[0].map(
          step => `Step ${step.step}: ${step.description}`
        )
      })
    })
    .catch(err => res.status(500).json(err))
})

router.post('/', (req, res) => {
  const recipe = req.body

  db
    .addRecipe(recipe)
    .then(id => res.status(201).json(...id))
    .catch(err => res.status(500).json(err))
})

module.exports = router
