const express = require('express');
const server = express();
const db = require('./data/helper');
server.use(express.json());

// API Status endpoint
server.get('/', (req, res) => res.send({"API": "live"}))

// Endpoints

server.get('/api/dishes', (req, res) => {
    db.getDishes()
        .then(dishes => res.status(200).json(dishes))
        .catch(err => res.status(500).json({error: "The dishes information could not be retrieved."}))
})

server.get('/api/dishes/:id', (req,res) => {
    const id = req.params.id;
    db.getDish(id)
        .then(dish => {
            if (dish) {
                res.status(200).json(dish);
            } else {
                res.status(404).json({message: "The dish with the specified ID does not exist."});
            }
        })
        .catch(err => {
            res.status(500).json({error: "The dish information could not be retrieved."});
        })
});

server.post('/api/dishes', (req,res) => {
    const {dish_name} = req.body;
    if (!dish_name) {
        res.status(400).json({message: "Please provide a name for the dish"});
    } else {
        db.addDish(req.body)
        .then(dish => {
            res.status(201).json(dish)
        }).catch(err => {
            res.status(500).json({message: "There was an error while saving the dish to the database"})
        })
    }
})

server.get('/api/recipes', (req, res) => {
    db.getRecipes()
        .then(recipes => res.status(200).json(recipes))
        .catch(err => res.status(500).json({error: "The recipes information could not be retrieved."}))
})

server.post('/api/recipes', (req,res) => {
    const {recipe_name} = req.body;
    if (!recipe_name) {
        res.status(400).json({message: "Please provide a name for the recipe"});
    } else {
        db.addRecipe(req.body)
        .then(recipe => {
            res.status(201).json(recipe)
        }).catch(err => {
            res.status(500).json({message: "There was an error while saving the recipe to the database"})
        })
    }
})

const port = process.env.PORT || 9000
server.listen(port, () => console.log(`Port running on http://localhost:${port}`))