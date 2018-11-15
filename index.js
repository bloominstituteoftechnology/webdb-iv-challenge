const express = require('express');
const server = express();
const db = require('./helpers/recipesDB')

server.use(express.json());


server.get('/dishes', (req,res) =>{
    db.getDishes()
    .then(r => r.length ? res.status(200).json(r) : res.status(404).json({message: 'Data not found'}))
    .catch(err => res.status(500).json({message: 'An error occurred while retrieving the data.'}))

})


server.listen(8888, ()=> console.log('Server listening on Port 8888'));