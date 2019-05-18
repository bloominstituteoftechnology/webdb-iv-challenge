const knex = require('knex');
const knexConfig = require('../knexfile');
const db = knex(knexConfig.development);

function getDishes() {
    return db('dishes');
}

function getDish(id) {
    return db('dishes').join('recipes', 'dishes.id', '=', 'recipes.dish_id').where({'recipes.dish_id': id});
}

function addDish(dish) {
    return db('dishes').insert(dish).into('dishes');
}

function getRecipes() {
    return db('recipes').join('dishes', {'recipes.dish_id': 'dishes.id'});
}

function addRecipe(recipe) {
    return db('recipes').insert(recipe).into('recipes');
}

module.exports = {getDishes, getDish, addDish, getRecipes, addRecipe}