const knex = require('knex');
const knexConfig = require('../knexfile.js');
const db = knex(knexConfig.development);

module.exports = {
    getDishes,
    addDish,
    getDish,
    getRecipes,
    addRecipe
};

function getDishes() {
    return db('dishes_table');
};

function addDish(dish) {
    return db('dishes_table')
        .insert(dish)
        .then(ids => ({id: ids[0]}));
};

function addRecipe(recipe) {
    return db('recipes_table')
        .insert(recipe)
        .then(ids => ({id: ids[0]}));
};