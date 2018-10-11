const express = require('express');
const helmet = require('helmet');

const dishesRoute = require('./dishes/dishesRoutes.js');
const recipes = require('./helperFunctions.js');

const server = express();

server.use(helmet());
server.use(express.json());

// sanity check
server.get('/', (req, res) => {
    res.send("It's working, buddy.")
});

server.get('/api/recipes', (req, res) => {
    recipes
        .getRecipes()
        .then(recipes => {
            res.status(200).json(recipes)
        })
        .catch(err => {
            res.status(500).json(err);
        })
});

server.use('/api/dishes', dishesRoute);

const port = 7777;
server.listen(port, () => console.log(`***API running on ${port}`));