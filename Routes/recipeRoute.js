const express = require('express');
const router = express.Router();
const recipeDB = require('../dbhelper')
const knex = require('knex');
const dbconfig = require('../knexfile');
const db = knex(dbconfig.development);

router.post('/', (req, res) => {
    const recipe = req.body;
    if (!recipe) {
        res.status(404)
            .json({ error: "Please provide recipe information." })
        return
    }
    recipeDB.addRecipe(recipe)
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
    recipeDB.getRecipe()
        .then(recipes => {
            res
                .status(200)
                .json(recipes);
        })
        .catch(err => {
            res
                .status(500)
                .json({ error: err })
        })
})

module.exports = router;