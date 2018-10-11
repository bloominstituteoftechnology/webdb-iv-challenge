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

// add dish to database

// get all recipes w/ related dishes

// add a recipe