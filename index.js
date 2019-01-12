const db = require('./data/db.js')
const express = require('express');

const PORT = 4001;
const server = express();

server.use(express.json());

server.get('/api/dishes', (req, res) => {
    db.getDishes()
        .then(dishes => {
            res
                .json(dishes);
        })
        .catch(err => {
            res
                .status(500)
                .json({message: 'The dishes could not be retrieved at this time.'})
        });
});

server.listen(PORT, err => {
    console.log(`Server is running on ${PORT}`);
});