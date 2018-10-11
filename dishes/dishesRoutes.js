const express = require('express');

const dishes = require('../helperFunctions.js');

const router = express.Router();

// get all dishes
router.get('/', (req, res) => {
    dishes
        .getDishes()
        .then(dishes => {
            res.status(200).json(dishes);
        })
        .catch(err => res.status(500).json(err));
});

// get dish by id
router.get('/:id', (req, res) => {
    const { id } = req.params;
    dishes
        .getDish(id)
        .then(dish => {
            res.status(200).json(dish);
        })
        .catch(err => res.status(500).json(err));
    });

// add dish to database
router.post('/', (req, res) => {
    const dish = req.body;

    dishes
        .addDish(dish)
        .then(ids => {
            res.status(201).json(ids[0]);
        })
        .catch(err => {
            res.status(500).json(err);
        });
});

// get all recipes w/ related dishes


// add a recipe

module.exports = router;