const express = require('express');
const db = require('./db/helpers/db');

const server = express();
server.use(express.json());

server.get('/dishes', (req, res) => {
    db.getDishes()
    .then(dishes => {
        res.status(200).json(dishes)
    }).catch (err => res.status(500).json({ error: "Unable to retrieve."}))
})

server.listen(5000, () =>{
    console.log(`server is listening on port 5000`)
})