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
        .join('recipes', 'dishes.id', '=', 'recipes.dish_id')
        .where('dishes.id', id)
        .select('dishes.name as name', 'recipes.name as recipe')
}

function addDish(dish) {
    return db('dishes')
    .insert(dish)
    .into('dishes');
}