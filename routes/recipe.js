const express = require('express');
const router = express.Router();

const getDB = require('../data/helpers/getDB');

router.get('/', (req, res) => {
    getDB.getRecipes()
        .then(rows => {
            res.json(rows);
        })
        .catch(err => {
            res.status(500).json({ errorMessage: 'Failed to get recipes' });
        });
})

module.exports = router;