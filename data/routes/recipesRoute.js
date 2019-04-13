const express = require('express')
const router = express.Router()

const db = require('../helpers/db')

// endpoints
router.get('/', (req, res) => {
  db.getRecipes()
    .then(recipes => {
      res
        .status(200)
        .json(recipes)
    })
    .catch(() => {
      res
        .status(500)
        .json({message: 'Failed to get recipes'})
    })
})

router.get('/:id', (req, res) => {
  const {id} = req.params;
  db.getRecipes(id)
    .then(recipe => {
      if(recipe) {
        res
          .status(200)
          .json(recipe)
      } else {
        res
          .status(404)
          .json({message: 'Recipe not found under current id'})
      }
    })
    .catch(err => {
      console.log(err)
      res
        .status(500)
        .json({message: 'Failed to get recipe'})
    })
})

router.get('/:id/ingredients', (req, res) => {
  const {id} = req.params;
  db.getIngredients(id)
    .then(ingredients => {
      if(ingredients) {
        res
          .status(200)
          .json(ingredients)
      } else {
        res
          .status(404)
          .json({message: 'Recipe ingredients not found under current id'})
      }
    })
    .catch(err => {
      console.log(err)
      res
        .status(500)
        .json({message: 'Failed to get recipe ingredients'})
    })
})

router.post('/', (req, res) => {
  const recipe = req.body;

  if(recipe.recipe_name) {
    db.addDish(recipe)
      .then(newRecipe => {
        res
          .status(201)
          .json(newRecipe)
      })
      .catch(() => {
        res
          .status(500)
          .json({message: 'Failed to add recipe'})
      })
  } else {
    res
      .status(400)
      .json({message: 'Missing recipe_name'})
  }
})

module.exports = router;
