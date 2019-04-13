const knex =require('knex');
const dbConfig = require('../knexfile.js');
const db = knex(dbConfig.development);

module.exports = {
    getDishes,
    addDish,
    getDishById,
    getRecipes,
    addRecipe
}

function getDishes(){
    return db('dish')
}

function addDish(dish){
    return db('dish')
    .insert(dish)
}
function getDishById(id){
    return db('dish').where({'dish.id': id}) ///How to include related dishes
}

function getRecipes(){
    return db('recipe')
}
function addRecipe(recipe){
    return db('recipe')
    .insert(recipe)
}