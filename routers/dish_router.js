const express = require('express');

const dishDB = require('../data/helpers/dishDB');

const router = express.Router();
// const knex = require('knex');
// const dbConfig = require('../knexfile');
// const db = knex(dbConfig.development);


router.use((req, res, next) => {
    next();
});

router.get('/', (req, res) => {
    // db('dish')
    dishDB.getDishes()

    .then(dishes => {
        res.json(dishes);
    })
    .catch(err => {
        res.status(500).json({err: "Failed to find dishes"});
    })
});

router.post('/', (req, res) => {
    const dish = req.body;

    if (dish.dish_name) {
        dishDB.addDish(dish)
        .then((ids) => {
            res.status(201).json(ids);
        })
        .catch(err => {
            res.status(500).json({ err: "Failed to insert dish"});
        });
    } else {
        res.status(400).json({message: "Provide dish_name."})
    }
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    
    dishDB.getDish(id)
    .then(dish => {
        if (dish.length > 0) {
            res.json(dish);
        }
        else {
            res.status(404).json({error: "The dish with the specified ID does not exist."});
            // *This works, but returns the above error if the dish exists but has not recipes as foreign keys.
        }
    })
    .catch(err => {
        res.status(500).json({err: "Failed to find dish"});
    })
});
  
  

module.exports = router;