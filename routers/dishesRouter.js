const express = require('express');
const dishDb = require('../data/helpers/dishDb.js');

const router = express.Router();

// [GET] /api/dishes
router.get('/', (req, res) => {
    dishDb.getDishes()
        .then(dishes => {
            res.status(200).json(dishes);
        })
        .catch(err => {
            res.status(500).json({ error: err, errorMessage: 'Error retrieving dishes' });
        });
});

// [GET] /api/dishes/:id
router.get('/:id', (req, res) => {
    dishDb.getDish(req.params.id)
        .then(dish => {
            res.status(200).json(dish)
        })
        .catch(err => {
            res.status(500).json({ error: err, errorMessage: 'Error retrieving dishes' });
        })
});

// [POST] /api/dishes
router.post('/', (req, res) => {
    const dish = req.body;

    dishDb.addDish(dish)
        .then(id => {
            return dishDb.getDish(id.id);
        })
        .then(dish => {
            res.status(201).json(dish);
        })
        .catch(err => {
            if(err.errno = 19){
                res.status(500).json({ error: err, errorMessage: 'Dish already exists in database'})
            }
            res.status(500).json({ error: err, errorMessage: 'Error adding dish' });
        })
})

module.exports = router;