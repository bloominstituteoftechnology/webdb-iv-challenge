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
    return db('dish');
};

function addDish(dish) {
    return db('dish')
        .insert(dish)
        .then(ids => ({ id: ids[0] }));
};

function getDish(id) {
    return db('dish')
        .where({ id: Number(id) })
        .first();
};

function getRecipes() {
    return db('dish')
        .join('recipe', 'dish.id', '=', 'recipe.dish_id')
        .select('recipe.id', 'recipe.recipe_name', 'dish.name');
};

function addRecipe(recipe) {
    return db('recipe')
        .insert(recipe)
        .then(ids => ({ id: ids[0] }));
};