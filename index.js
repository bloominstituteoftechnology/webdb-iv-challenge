const express = require('express'); 
const knex = require('knex'); 

const dbConfig = require('./knexfile'); 
const db = knex(dbConfig.development); 

const server = express();
server.use(express.json()); 


server.listen(5500, () => {
    console.log("Server up and running at PORT 5500")
})