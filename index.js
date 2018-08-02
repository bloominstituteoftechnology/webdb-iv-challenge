const express = require('express');
const server = express();
const db = require('./db/db.js');

server.use(express.json());


server.get('/api/dishes', (req, res) => {
    db('dishes')
    .then(response => {
        res.status(200).json(response)
    })
    .catch(err => {
        res.status(500).json({error: 'The dishes could not be retrieved.'})
    })
})

const port = 8000;
server.listen(port, () => console.log('API running'));