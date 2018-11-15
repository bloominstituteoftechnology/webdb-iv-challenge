const express = require('express');
const db = require('./data/db.js');

server = express();

server.use(express.json());

server.get('/api/dish', (req, res) => {
    db.getDishes()
        .then(dishes => {
            res.status(200).json(dishes);
        })
        .catch(err => {
            res.status(500).json({ error: 'Error fetching dishes.', err });
        });
});

server.get('/api/dish/:dishid', (req, res) => {
    const { dishid } = req.params;

    db.getDish(dishid)
        .then(dish => {
            if(!dish) {
                res.status(404).json({ error: 'Dish with the specified ID not found' });
            } else {
                res.status(200).json(dish);
            }
        })
        .catch(err => {
            res.status(500).json({ error: 'Error fetching dish.', err });
        });
});

server.post('/api/dish', (req, res) => {
    const dish = req.body;

    if (!dish.name) {
        res.status(500).json({ error: 'Name field for name of dish is required.' });
    } else {
        db.addDish(dish)
            .then(id => {
                res.status(201).json(id);
            })
            .catch(err => {
                res.status(500).json({ error: 'Error adding dish.', err });
            });
    }
});

server.get('/api/recipe', (req, res) => {
    db.getRecipes()
        .then(recipes => {
            res.status(200).json(recipes);
        })
        .catch(err => {
            res.status(500).json({ error: 'Error fetching recipes.', err });
        });
});

server.get('/api/recipe/:recipeid', (req, res) => {
    const { recipeid } = req.params;

    db.getRecipe(recipeid)
        .then(recipe => {
            if(!recipe) {
                res.status(404).json({ error: 'Recipe with the specified ID not found' });
            } else {
                res.status(200).json(recipe);
            }
        })
        .catch(err => {
            res.status(500).json({ error: 'Error fetching recipe.', err });
        });
});

server.post('/api/recipe', (req, res) => {
    const recipe = req.body;

    if (!recipe.recipe_name || !recipe.dish_id) {
        res.status(500).json({ error: 'recipe_name and dish_id fields are required.' });
    } else {
        db.addRecipe(recipe)
            .then(id => {
                res.status(201).json(id);
            })
            .catch(err => {
                res.status(500).json({ error: 'Error adding recipe.', err });
            });
    }
});

server.listen(3300, () => console.log('Server listening on port 3300'));