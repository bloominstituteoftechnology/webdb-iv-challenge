const express = require('express');
const server = express();
const knex = require('knex');
const dbConfig = require('./knexfile');
const db = knex(dbConfig.development);

server.use(express.json());

server.get("/dishes", async (req,res)=>{  
     try { 
    const dishes = await db('dishes');
    res.status(200).json(dishes);
}
catch (err) {
    res.status(500).json(err);
}});


server.listen( 2000, () => console.log('===Server running port 2000==='))