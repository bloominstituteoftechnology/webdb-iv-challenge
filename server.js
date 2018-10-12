// DEPENDENCIES
const express = require('express');
const helmet = require('helmet');

const model = require('./models/model.js');

// SERVER
const server = express();

// MIDDLEWARE
server.use(express.json());
server.use(helmet());

// ENDPOINTS

// get dishes
server.get('/api/dishes/', (req, res) => {
	model
		.getDishes()
		.then(dishes => {
			res.status(200).json(dishes);
		})
		.catch(err => res.status(500).json(err));
});

// get recipes by dish id
server.get('/api/dishes/:id', (req, res) => {
	const { id } = req.params;

	model
		.getDish(id)
		.then(dish => {
			if (dish) {
				res.status(200).json(dish);
			} else {
				res.status(404).json({ error: 'No dish by that id' });
			}
		})
		.catch(err => res.status(500).json(err));
});

// add dish
server.post('/api/dishes/', (req, res) => {
	const dish = req.body;

	model
		.addDish(dish)
		.then(id => {
			res.status(201).json(id);
		})
		.catch(err => {
			res.status(500).json(err);
		});
});

// get recipes
server.get('/api/recipes/', (req, res) => {
	model
		.getRecipes()
		.then(recipes => {
			res.status(200).json(recipes);
		})
		.catch(err => res.status(500).json(err));
});

// add recipe
server.post('/api/recipes/', (req, res) => {
	const recipe = req.body;

	model
		.addRecipe(recipe)
		.then(id => {
			res.status(201).json(id);
		})
		.catch(err => {
			res.status(500).json(err);
		});
});

// PORT
const port = 5000;
server.listen(port, function() {
	console.log(`\n=== Listening on http://localhost:${port} ===\n`);
});
