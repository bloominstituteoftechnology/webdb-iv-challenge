const knex = require('knex');
const knexConfig = require('../knexfile.js');
const db = knex(knexConfig.development);

module.exports= {
    getRecipes,
    getDishes,
    addDish
}

function getRecipes(){
    return db('recipe');
}

function getDishes(){
    return db('dish')
}

function addDish(dish){
    return db('dish')
        .insert(dish)
        .into('dish');
}

 

