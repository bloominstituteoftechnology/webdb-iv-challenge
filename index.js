const express = require('express');
const helmet = require('helmet');
const knex = require("knex");
const knexConfig = require("./knexfile")
const db = require("./Data/dbHelper.js")

const server = express();

server.use(express.json());
server.use(helmet());

server.get("/", (req, res) => {
    res.status(200).json({api: "running"});
})

server.get('/api/dishes', (req, res) => {
    db.getDishes()
        .then(dishes => res.status(200).json(dishes))
        .catch(err => res.status(500).json({error: err}))
});

server.get('/api/dishes/:id', (req, res) => {
    const {id} = req.params;

    db.getDish(id)
        .then(dish => dish[0] === undefined ? 
            res.status(400).json({error: "Please enter a valid id"}) : 
            res.status(200).json(dish))
    .catch(err => res.status(500).json({error: err}))
});

server.post('/api/dishes', (req, res) => {
    const changes = req.body;

    if (changes.name === "" || changes.name === undefined) {
        return res.status(400).json({error: "Please make sure the dish name is indexed."})
    }

    db.addDish(changes)
        .then(id => res.status(200).json(id))
        .catch(err => res.status(500).json({error: err}))
});

server.get('/api/recipes', (req, res) => {
    db.getRecipes()
        .then(recipes => res.status(200).json(recipes))
        .catch(err => res.status(500).json({error: err}))
});

server.post('/api/recipes', (req, res) => {
    const changes = req.body;

    if (changes.name === "" || changes.name === undefined) {
        return res.status(400).json({error: "Please make sure the recipe name is indexed."})
    }

    db.addRecipe(changes)
        .then(id => res.status(200).json(id))
        .catch(err => res.status(500).json({error: err}))
});

const port = 9001;

server.listen(port, function() {
    console.log(`\n=== Web API Listening on http://localhost:${port} ===\n`);
});
