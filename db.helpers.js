const knex = require('knex');

const dbConfig = require('./knexfile.js');
const db = knex(dbConfig.development);

module.exports ={
    getDishes,
    addDish,
    getDish,
    getRecipes,
    addRecipe
}

function getDishes(){
    return db('dishes');
}

function addDish(dish){
    return db('dishes').insert(dish);
}

function getDish(id){
    return db('dishes')
        .where('dishes.id', id)
        .join('recipes', 'dishes.id', 'recipes.dish_id')
}