const express = require('express');
const knex = require('knex');
const db_config = require('./knexfile.js');

const server = express();
const db = knex(db_config.development);
const PORT = 5678;

server.use(express.json());

/* server.get('/api/recipe_book/:id/students', (req, res) => {
    const cohort_id = req.params;
    db('recipe_book').where('recipe_id', id)
    .then(recipes => {
       res.json(recipes)
    })
    .catch(err => {
        res.status(500).json({ err: `Error obtaining ${recipe_id} recipe`})
    })
 }); */

server.listen(PORT, () => {
 console.log(`listening on port ${PORT}`);
});