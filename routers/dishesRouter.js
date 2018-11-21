const express = require('express');
const dishDb = require('../data/helpers/dishDb.js');

const router = express.Router();

// [GET] /api/dishes
router.get('/', (req, res) => {
    dishDb.getDishes()
        .then(dishes => {
            if (dishes.length) {
                res.status(200).json(dishes);
            } else {
                res.status(200).json({ successMessage: 'Currently no dishes in database'})
            }
        })
        .catch(err => {
            res.status(500).json({ error: err, errorMessage: 'Error retrieving dishes' });
        });
});

// [GET] /api/dishes/:id
router.get('/:id', (req, res) => {
    dishDb.getDish(req.params.id)
        .then(dish => {
            if (!Array.isArray(dish)) {
                res.status(200).json(dish)
            } else {
                res.status(404).json({ errorMessage: 'Error retrieving dish, id does not exist' })
            }
        })
        .catch(err => {
            res.status(500).json({ error: err, errorMessage: 'Error retrieving dish' });
        });
});

// [POST] /api/dishes
router.post('/', (req, res) => {
    const dish = req.body;
    if (dish.dish_name) {
        dishDb.addDish(dish)
            .then(id => {
                return dishDb.getDish(id.id);
            })
            .then(dish => {
                res.status(201).json(dish);
            })
            .catch(err => {
                if (err.errno = 19) {
                    res.status(500).json({ error: err, errorMessage: 'Dish name already exists in database' })
                }
                res.status(500).json({ error: err, errorMessage: 'Error adding dish' });
            });
    } else {
        res.status(400).json({ errorMessage: 'Dish name cannot be empty' })
    }
});

// [PUT] /api/dishes/:id
router.put('/:id', (req, res) => {
    if (req.body.dish_name) {
        dishDb.updateDish(req.params.id, req.body)
            .then(recordsUpdated => {
                if (recordsUpdated) {
                    return dishDb.getDish(req.params.id);
                } else {
                    res.status(404).json({ error: err, errorMessage: 'Error updating dish, dish id does not exist' })
                }
            })
            .then(dish => {
                if (dish) {
                    res.status(200).json(dish);
                } else {
                    res.status(404).json({ error: err, errorMessage: 'Error updating dish, dish id does not exist' })
                }
            })
            .catch(err => {
                if (err.errno = 19) {
                    if (err.code) {
                        res.status(400).json({ error: err, errorMessage: 'Error updating dish, name already exists' });
                    } else {
                        res.status(404).json({ error: err, errorMessage: 'Dish id does not exist' });
                    }
                } else {
                    res.status(500).json({ error: err, errorMessage: 'Error updating dish' });
                }
            });
    } else {
        res.status(400).json({ errorMessage: 'Dish name cannot be empty' });
    };
});

// [DELETE] /api/dishes/:id
router.delete('/:id', (req, res) => {
    dishDb.removeDish(req.params.id)
        .then(recordsDeleted => {
            if (recordsDeleted) {
                res.status(200).json({ recordsDeleted: recordsDeleted, successMessage: 'Successfully deleted dish' });
            } else {
                res.status(404).json({ errorMessage: 'Error deleting dish, dish id does not exist' })
            }
        })
        .catch(err => {
            res.status(500).json({ error: err, errorMessage: 'Error deleting dish' })
        })
})

module.exports = router;