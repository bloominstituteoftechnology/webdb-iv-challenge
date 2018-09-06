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

server.get("/dishes/:dishes_id", async (req, res) => {
    const { dish_id } = req.params;
    try {
        const dish = await db('dishes').where({ dish_id });
        res.status(200).json( dish );
    }
    catch (err) {
        res.status(500).json(err.message);
    }
});

server.get("/recipes", async (req, res) => {
    try {
        const recipes = await db('recipes')
        res.status(200).json(recipes);
    }
    catch (err) {
        res.status(500).json(err.message);
    }
});

server.post("/recipes", async (req, res) => {
    const newRecipe = req.body;
    try {
        if ( !newRecipe.recipe || !newRecipe.dish_id ) {
            res.status(400).json({ 
                message: "Recipe name and/or Dish_Id is required."
            })
        } else {
            try {
                const recipe = await db.insert(newRecipe).into('recipes');
                res.status(201).json(recipe);
            }
            catch (err) {
                res.status(500).json(err.message);
            }
        }
    }
    catch (err) {

    }
});


server.listen( 8000, () => console.log('===Server running port 8000==='))