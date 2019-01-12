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

function getDish(id) {
    return db('dishes_table')
        .where('id', Number(id))
        // .leftJoin('recipes_table', id, 'recipes_table.dish_id');     
};

function getRecipes() {
    return db('recipes_table')
        .leftJoin('dishes_table', 'dish_id', 'dishes_table.id');
};

function addRecipe(recipe) {
    return db('recipes_table')
        .insert(recipe)
        .then(ids => ({id: ids[0]}));
};