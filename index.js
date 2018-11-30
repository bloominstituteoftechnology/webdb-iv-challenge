const express = require("express");
const knex = require("knex");


const db = require('./data/helpers/dataAccess.js');

const server = express();

server.use(express.json());

db.getDishes()
    .then(res => {
        console.log('dishes')
    })
db.addDish({ name: 'fudge'})
    .then(res => {
        console.log('fudge')
    })
db.getDish(1);
db.getRecipes();
db.addRecipe({ name: "fudge", dish_id: "1"});






server.listen(8000, () => console.log("\n== Port 8k ==\n"));