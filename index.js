const db = require('./data/db.js')
const express = require('express');

const PORT = 4001;
const server = express();

server.use(express.json());

// get dishes

server.get('/api/dishes', (req, res) => {
    db.getDishes()
        .then(dishes => {
            res
                .json(dishes);
        })
        .catch(err => {
            res
                .status(500)
                .json({message: 'The dishes could not be retrieved at this time.'})
        });
});

// add dish and get ID of new dish

server.post('/api/dishes', (req,res) => {
    const newDish = req.body;
    if (newDish.dish_name) {
        db.addDish(newDish)
            .then(idInfo => {
                res
                    .status(201)
                    .json(idInfo)
            })
            .catch(err => {
                res
                    .status(500)
                    .json({message: 'The was an error saving the new dish.'})
            });
    }
    else {
        res
            .status(400)
            .json({message: 'Please provide the name of the new dish.'})
    }
});

// get dish and related recipes

server.get('/api/dish/:id', (req, res) => {
    const { id } = req.params 
    db.getDish(id)
        .then(dish => {
            res
                .json(dish);
        })
        .catch(err => {
            res
                .status(500)
                .json({message: 'The dish could not be retrieved at this time.'})
        });
});

// get recipes 

server.get('/api/recipes', (req, res) => {
    db.getRecipes()
        .then(recipes => {
            res
                .json(recipes);
        })
        .catch(err => {
            res
                .status(500)
                .json({message: 'The recipes could not be retrieved at this time.'})
        });
});

// add recipe and get ID of new recipe

server.post('/api/recipes', (req,res) => {
    const newRecipe = req.body;
    if (newRecipe.recipe_name) {
        db.addRecipe(newRecipe)
            .then(idInfo => {
                res
                    .status(201)
                    .json(idInfo)
            })
            .catch(err => {
                res
                    .status(500)
                    .json({message: 'The was an error saving the new recipe.'})
            });
    }
    else {
        res
            .status(400)
            .json({message: 'Please provide the name of the new recipe.'})
    }
});

// INITIATE LISTENING

server.listen(PORT, err => {
    console.log(`Server is running on ${PORT}`);
});

