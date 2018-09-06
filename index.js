const express = require('express');
const helmet = require('helmet');
const knex = require('knex');

// const dbConfig = require('./knexfile');
// const db = knex(dbConfig.development);
const db = require('./db/dataModel');

const server = express();

server.use(express.json());
server.use(helmet());

// dishes endpoints
server.post('/api/dishes', (req, res) => {
    const { name } = req.body;

    db.addDish({name})
    .then(ids => {
        res.status(201).json(ids)
    })
    .catch(err => {
        res.status(500).json(err);
    })
})

server.get('/api/dishes', async (req, res) => {
    try {
        const response = await db.getDishes();
        res.status(200).json(response);
    } catch (ex) {
        res.status(500).json(ex);
    }
})

server.get('/api/dishes/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const response = await db.getDish(id);
        res.status(200).json(response);
    } catch (ex) {
        res.status(500).json(ex);
    }
})

server.put('/api/dishes/:id', (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    db.updateDish(id, {name})
    .then(count => {
        res.status(200).json(count);
    })
    .catch(err => {
        res.status(500).json(err);
    })
})

server.delete('/api/dishes/:id', (req, res) => {
    const { id } = req.params;
    db.deleteDish(id)
    .then(count => {
        res.status(200).json(count);
    })
    .catch(err => {
        res.status(500).json(err);
    })
})


// recipes endpoints

server.post('/api/recipes', (req, res) => {
    const { name, dish_id, ingredients, instructions } = req.body;

    db.addRecipe({name, dish_id, ingredients, instructions})
    .then(ids => {
        res.status(201).json(ids)
    })
    .catch(err => {
        res.status(500).json(err);
    })
})

server.get('/api/recipes', async (req, res) => {
    try {
        const response = await db.getRecipes();
        res.status(200).json(response);
    } catch (ex) {
        res.status(500).json(ex);
    }
})

server.get('/api/recipes/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const response = await db.getRecipe(id);
        res.status(200).json(response);
    } catch (ex) {
        res.status(500).json(ex);
    }
})

server.put('/api/recipes/:id', (req, res) => {
    const { id } = req.params;
    const { name, dish_id, ingredients, instructions } = req.body;
    db.updateRecipe(id, {name, dish_id, ingredients, instructions})
    .then(count => {
        res.status(200).json(count);
    })
    .catch(err => {
        res.status(500).json(err);
    })
})

server.delete('/api/recipes/:id', (req, res) => {
    const { id } = req.params;
    db.deleteRecipe(id)
    .then(count => {
        res.status(200).json(count);
    })
    .catch(err => {
        res.status(500).json(err);
    })
})


server.listen(5000, console.log('\n=== Server listening on port 5000 ===\n'));