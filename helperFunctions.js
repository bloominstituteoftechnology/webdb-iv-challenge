const knex = require('knex');

const knexConfig = require('./knexfile.js');
const db = knex(knexConfig.development);

module.exports = {
    getDishes,
    addDish,
    getDish,
    getRecipes,
    addRecipe
};

function getDishes() {
    return db('dishes');
}

function getDish(id) {
    return db('dishes')
        .join('recipes', 'recipes.dish_id', '=', 'dishes.id')
        .where('dishes.id', id)
        .select('dishes.name as name', 'recipes.name as recipe')
}

function addDish(dish) {
    return db('dishes')
    .insert(dish)
    .into('dishes');
}

function getRecipes() {
    return db('recipes')
        .join('dishes', 'recipes.dish_id', '=', 'dishes.id')
        .select('recipes.name', 'dishes.name as dish')
}

function addRecipe(recipe) {
    return db('recipes')
        .insert(recipe)
        .into('recipes')
}