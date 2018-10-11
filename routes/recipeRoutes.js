const express = require('express');
const recipeDb = require('../data/models/recipeDb.js');

const router = express.Router();

// get all the dishes from the database
router.get('/', (req, res) => {
	recipeDb
		.getDishes()
		.then(dishes => res.status(200).json(dishes))
		.catch(err => res.status(500).json({ error: `Server failed to GET dishes information: ${ err }` }));
});

// get the dish with the given ID and include a list of the related recipes
router.get('/:id', (req, res) => {
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
		.then(recipes => res.status(200).json(recipes))
		.catch(err => res.status(500).json({ error: `Server failed to GET all recipes information: ${ err }` }));
});

// add a new dish to the database
router.post('/', (req, res) => {
	const newDish = req.body;
	if (newDish.name === '') {
		return res.status(401).json({ error: 'Name of the new dish should not be an empty string.' });
	}
	recipeDb
		.addDish(newDish)
		.then(id => res.status(201).json(id.id[0]))
		.catch(err => res.status(500).json(`Server failed to POST new dish: ${ err }`));
});

module.exports = router;
