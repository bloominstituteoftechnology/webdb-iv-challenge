//should return a list of all dishes in the database.
const express = require('express');
const router = express.Router();
const dishes = require('../db/helpers/dishesModel.js')

router.get('', (req, res) => {
	dishes.getDishes()
	.then(response => {
		console.log(response)
		res.status(200).json(response);
	})
})

//should return the dish with the provided id and include a list of the related recipes
router.get('/:id', (req, res) => {
	const id = req.params.id
		dishes.getDish(id)
		.then(response => {
			console.log(response)
			res.status(200).json(response)
		})
})


//should add the dish to the database and return the id of the new dish.
router.post('', (req, res) => {
	const {dish_name} = req.body
	dishes.addDish({dish_name})
	.then(response => {
		console.log(response)
		res.status(201).json(response);
	})
})

module.exports = router;