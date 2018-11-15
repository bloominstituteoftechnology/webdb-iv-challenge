const express = require('express');
const knex = require('knex');
const functionJunction = require('./functionJunction');

const server = express();
server.use(express.json());



server.get('/dishes', (req, res) => {
    const dishes = functionJunction.getDishes();
    db  
        .get()
        .then(response => {
            res.status(200).json(response);
        })
        .catch(err => {
            res.status(500).json({ message: error });
        })
});



server.listen(9000, () => {
    console.log('Server listening on 9000');
  });