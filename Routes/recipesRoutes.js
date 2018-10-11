const express = require('express');
const router = express.Router();
const recipes = require('../db/helpers/recipesModel.js')

// should return a list of all recipes in the database including the dish they belong to
router.get('', (req, res) => {
	recipes.getRecipes()
		.then(response => {
			console.log(response)
			res.status(200).json(response)
		})
})

/* The recipe should include:
name of the dish.
name of the recipe.
the list of ingredients with the quantity. */

router.get('/:id', (req, res) => {
	id = req.params.id
		recipes.getRecipe(id)
		.then(response => {
			console.log(response)
			res.status(200).json(response);
		})
})

//should add a recipe to the database and return the id of the new recipe.
router.post('', (req, res) => {
	const {recipe_name, directions, dish_id} = req.body
	recipes.addRecipe({recipe_name, directions, dish_id})
	.then(response => {
		res.status(201).json(response)
	})
})

module.exports = router;
