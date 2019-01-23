const express = require('express');

const helpersDb = require('./db.helpers');

const server = express();
const PORT = 5050;

server.use(express.json())

server.get('/api/dishes/:id', (req, res) => {
     const { id }  = req.params; 
        helpersDb.getDish(id)
        .then(dish => {
        res.status(200).json(dish); 
    }).catch(err => {
         res.status(500).json({message: "Error retrieving the dish from database"})
     })
 })


server.listen(PORT, ()=>{
    console.log(`Listening on port ${PORT}!`)
})