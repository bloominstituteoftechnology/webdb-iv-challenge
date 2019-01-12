const express = require('express');
const router = express.Router();
const dishDB = require('../dbhelper')
const knex = require('knex');
const dbconfig = require('../knexfile');
const db = knex(dbconfig.development);

router.post('/', (req, res) => {
    const dish = req.body;
    console.log(dish)
    if (!dish) {
        res.status(404)
            .json({ error: "Please provide dish information." })
        return
    }
    dishDB.addDish(dish)
        .then(id => {
            res
                .status(201)
                .json(id)
        }).catch(err => {
            console.log(err)
            res
                .status(500)
                .json({ error: "Error adding dish to database", err })
        })
})
router.get('/', (req, res) => {
    dishDB.getDishes()
        .then(dishes => {
            res
                .status(200)
                .json(dishes);
        })
        .catch(err => {
            res
                .status(500)
                .json({ error: err })
        })
})
router.get('/:id', (req, res) => {
    const { id } = req.params;
    console.log(id)
    dishDB.getDish(id)
        .then(dish => {
            if (dish) {
                res
                    .status(200)
                    .json(dish);
            } else {
                res
                    .status(404)
                    .json({
                        error: "The dish with the specified ID does not exist."
                    })
            }
        })
        .catch(err => {
            res
                .status(500)
                .json({
                    error: err
                })
        })
})



module.exports = router;