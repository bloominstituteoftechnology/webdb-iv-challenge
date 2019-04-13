const express = require('express');
const knex = require('knex');
const server = express();
const PORT  = 5200;

//Knex 
const dbConfig = require('./knexfile.js')
const db = knex(dbConfig.development);

// middleware
server.use(express.json());




server.get('/api', (req,res) => {
    res.json({Message: `This is app up and running now`});
});

server.listen(PORT, () => {
    console.log(`Server is running at localhost://${PORT}`);
})

