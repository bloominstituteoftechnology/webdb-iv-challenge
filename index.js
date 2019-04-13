const express=require('express');
const server=express();
server.use(express.json());
const knex= require('knex');
const knexConfig=require('./knexfile');
const db= require('./data/db');

server.get('/api/dishes', (req, res)=>{
    db.getDishes()
        .then(users=>{
            res.status(200).json(users);
        })
        .catch(error=>{
            res
                .status(500)
                .json({message:"cant get", error})
        })
})
server.listen(9000, ()=>console.log('the server is alive at 9000'))