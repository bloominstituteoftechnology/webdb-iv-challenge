const express = require('express');
const server = express();
const knex = require('knex');

const dbConfig = require('./knexfile');
const db = knex(dbConfig.development);

server.use(express.json());

server.get("/dishes", async (req, res) => {
    try { 
        const dishes = await db('dishes');
        res.status(200).json(dishes);
    }
    catch (err) {
        res.status(500).json(err);
    }
});

server.post("/dishes", async (req, res) => {
    const dish = req.body;
    if( ! dish.name) {
        res.status(400).json({
            message: "A dish name is required."
        })
    } else {
        try {
            const addDish = await db.insert(dish).into('dishes');
            res.status(201).json(addDish);
        }
        catch (err) {
            res.status(500).json(err)
        }
    }
});

server.listen( 8000, () => console.log('===Server running port 8000==='))