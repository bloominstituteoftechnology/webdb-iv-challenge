const express = require('express');
const helmet = require('helmet');
const knex = require('knex');
const dbHelper = require('./dbHelper');
const dbConfig = require('./knexfile');
const db = knex(dbConfig.development);

const server = express();
const PORT = 4567;

 server.use(helmet());
 server.use(express.json());


 // Testing

const Dishes = dbHelper.getDishes().then(res => {
    console.log(res)
})

const Recipes = dbHelper.getRecipes().then(res => {
    console.log(res)
})

 //


 server.listen(PORT, () => {
     console.log(`API running on port ${PORT}`)
 })