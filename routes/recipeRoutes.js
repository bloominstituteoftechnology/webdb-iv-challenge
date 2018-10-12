const express = require('express');
const recipeDb = require('../data/models/recipeDb.js');

const router = express.Router();

// get all the dishes from the database
router.get('/dishes/', (req, res) => {
	recipeDb
		.getDishes()
		.then(dishes => {
			if (!dishes.length) {
				res.status(404).json({ message: 'There are no dishes in the database. You should add one first.' });
			}
			return res.status(200).json(dishes);
		})
		.catch(err => res.status(500).json({ error: `Server failed to GET dishes information: ${ err }` }));
});

// get the dish with the given ID and include a list of the related recipes
router.get('/dish/:id', (req, res) => {
	const { id } = req.params;
	recipeDb
		.getDish(id)
		.then(dish => {
			if (dish === 'noDishId') {
				return res.status(404).json({ error: `Dish with ID ${ id } does not exist.` });
			}
			return res.status(200).json(dish);
		})
		.catch(err => res.status(500).json({ error: `Server failed to GET dish with ID ${ id }: ${ err }` }));
});

// get all recipes in the database including the dish they belong to
router.get('/all/recipes/', (req, res) => {
	recipeDb
		.getRecipes()
		.then(recipes => {
			if (!recipes.length) {
				return res.status(404).json({ message: 'There are no recipes in the database. You should add one first.' });
			}
			return res.status(200).json(recipes);
		})
		.catch(err => res.status(500).json({ error: `Server failed to GET all recipes information: ${ err }` }));
});

// add a new dish to the database
router.post('/dish/', (req, res) => {
	const newDish = req.body;
	if (newDish.name === '') {
		return res.status(401).json({ error: 'Name of the new dish should not be empty.' });
	}
	recipeDb
		.addDish(newDish)
		.then(id => res.status(201).json(id.id[0]))
		.catch(err => res.status(500).json(`Server failed to POST new dish: ${ err }`));
});

// add a recipe to the db and return the ID of the new recipe
router.post('/all/recipes', (req, res) => {
	const newRecipe = req.body;
	if (newRecipe.name === '') {
		return res.status(401).json({ error: 'Name of the new recipe should not be empty.' });
	}
	recipeDb
		.addRecipe(newRecipe)
		.then(id => {
			if (id === 'noDishId') {
				return res.status(404).json({ error: `Dish with ID ${ newRecipe.dish_id } does not exist. You cannot add a recipe to a dish that does not exist.` });
			}
			return res.status(201).json(id.id[0]);
		})
		.catch(err => res.status(500).json({ error: `Server failed to POST new recipe: ${ err }` }));
});

// get the recipe with the given ID. This should include:
// name of the dish
// name of the recipe
// list of ingredients with the quantity
// list of steps in the order they need to be executed
router.get('/all/recipes/:id', (req, res) => {
	const { id } = req.params;
	recipeDb
		.getRecipe(id)
		.then(recipe => {
			if (recipe === 'noRecipeId') {
				return res.status(404).json({ error: `Recipe with ID ${ id } does not exist.` });
			}
			return res.status(200).json(recipe);
		})
		.catch(err => res.status(500).json({ error: `Server failed to GET recipe with ID ${ id }: ${ err }` }));
});

module.exports = router;
