const express = require('express');
const recipeDb = require('../data/models/recipeDb.js');

const router = express.Router();

// get all the dishes from the database
router.get('/', (req, res) => {
	recipeDb
		.getDishes()
		.then(dishes => res.status(200).json(dishes))
		.catch(err => res.status(500).json(`Server failed to GET dishes information: ${ err }`));
});

// add a new dish to the database
router.post('/', (req, res) => {
	const newDish = req.body;
	if (newDish.name === '') {
		return res.status(403).json({ error: 'Name of the new dish should not be an empty string.' });
	}
	recipeDb
		.addDish(newDish)
		.then(id => res.status(201).json(id.id[0]))
		.catch(err => res.status(500).json(`Server failed to POST new dish: ${ err }`));
});

module.exports = router;
