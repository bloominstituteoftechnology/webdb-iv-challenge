const router = require('express').Router()
const controller = require('./recipeControllers')

router.get('/:id', controller.getRecipes)

router.get('/', controller.getRecipes)

router.post('/', controller.addRecipe)

module.exports = router
