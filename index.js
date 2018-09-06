const express = require('express');
const helmet = require('helmet');
const helper = require('./data/helper');

const app = express();
app.use(express.json());
app.use(helmet());

app.get('/dishes', async (req, res) => {
	try {
		const dishes = await helper.getDishes()
		res.status(200).json(dishes)
	} catch(err) {
		res.status(500).json({ error: 'The request could not be fulfilled.' });
	}
});

app.post('/dishes', async (req, res) => {
	const dish = req.body;
	try {
		const id = await helper.addDish(dish);
		res.status(201).json(id)
	} catch(err) {
		res.status(500).json({ error: 'The request could not be fulfilled.' });
	}
})

app.get('/dishes/:id', async (req, res) => {
	const { id } = req.params;
	try {
		const dish = await helper.getDish(id)
		res.status(200).json(dish)
	} catch(err) {
		res.status(500).json({ error: 'The request could not be fulfilled.' });
	}
});

app.get('/recipes', async (req, res) => {
	try {
		const recipes = await helper.getRecipes();
		res.status(200).json(recipes)
	} catch(err) {
		res.status(500).json({ error: 'The request could not be fulfilled.' });
	}
})

app.post('/recipes', async (req, res) => {
	const recipe = req.body
	try {
		const id = await helper.addRecipe(recipe);
		res.status(201).json(id)
	} catch(err) {
		res.status(500).json({ error: 'The request could not be fulfilled.' });
	}
})

app.get('/recipes/:id', async (req, res) => {
	const { id } = req.params;
	try {
		const recipe = await helper.getRecipe(id);
		res.status(200).json(recipe)
	} catch(err) {
		res.status(500).json({ error: 'The request could not be fulfilled.' });
	}
})

app.listen(9000, () => {
  console.log('Server listening on 9000');
});