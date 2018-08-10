const express = require('express');
const db = require('./data/RecipeDB');
const server = express();

server.use(express.json());


// ==== DISH REQUESTS ====
server.get('/dishes', (req, res) => {
    db('dishes')
        .then(dishes => {
            res.status(200).json(dishes)
        })
        .catch(err => {
            res.status(500).json(err)
        })
})

server.listen(3300, () => console.log('\n==== API is running... ====\n'));