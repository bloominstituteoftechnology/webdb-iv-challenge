const express = require('express');
const helmet = require('helmet');
const dbhelper = require('./dbhelper');

const app = express();
app.use(express.json());
app.use(helmet());

app.get('/dish',  (req, res) => {
	try {
		const dishes =  dbhelper.getDishes()
		res.status(200).json(dishes)
	} catch(err) {
		res.status(500).json({ error: 'The request could not be fulfilled.' });
	}
});

app.post('/dish',  (req, res) => {
	const dish = req.body;
	try {
		const id =  dbhelper.addDish(dish);
		res.status(201).json(id)
	} catch(err) {
		res.status(500).json({ error: 'The request could not be fulfilled.' });
	}
})

app.get('/dish/:id',  (req, res) => {
	const { id } = req.params;
	try {
		const dish =  dbhelper.getDish(id)
		res.status(200).json(dish)
	} catch(err) {
		res.status(500).json({ error: 'The request could not be fulfilled.' });
	}
});

app.get('/recipe',  (req, res) => {
	try {
		const recipes = dbhelper.getRecipes();
		res.status(200).json(recipes)
	} catch(err) {
		res.status(500).json({ error: 'The request could not be fulfilled.' });
	}
})

app.post('/recipes',  (req, res) => {
	const recipe = req.body
	try {
		const id = await dbhelper.addRecipe(recipe);
		res.status(201).json(id)
	} catch(err) {
		res.status(500).json({ error: 'The request could not be fulfilled.' });
	}
})

app.get('/recipes/:id',  (req, res) => {
	const { id } = req.params;
	try {
		const recipe =  dbhelper.getRecipe(id);
		res.status(200).json(recipe)
	} catch(err) {
		res.status(500).json({ error: 'The request could not be fulfilled.' });
	}
})



app.listen(9000, () => {
  console.log('Server listening on 9000');
});