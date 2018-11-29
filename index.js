const express = require('express');
const db = require('./data/db');

const server = express();

server.use(express.json());

server.get('/', async(req, res) => {
    await res.send('Hello there.');
});

server.get('/dishes', async(req, res) => {
    try {
        const dishes = await db.getDishes();
        res.status(200).json(dishes);
    } catch (error) {
        res.status(500).json({ error: 'There was an error getting the dishes.' });
    }
});

server.get('/dishes/:id', async(req, res) => {
    const { id } = req.params;
    try {
        const dish = await db.getDish(id);
        res.status(200).json(dish);
    } catch (error) {
        res.status(500).json({ error: 'There was an error getting that dish.' });
    }
});

server.post('/dishes', async(req, res) => {
    const newDishData = req.body;

    try {
        const dishId = await db.addDish(newDishData);
        res.status(201).json(dishId);
    } catch (error) {
        res.status(500).json({ error: 'There was an error adding that dish.' });
    }
});