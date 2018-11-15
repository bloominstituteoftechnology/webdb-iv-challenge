const knex = require('knex');
const knexConfig = require('../knexfile.js');
const db = knex(knexConfig.development);

module.exports = {
    getDishes,
    addDish,
    getDish,
    getRecipes,
    addRecipe,
    getRecipe
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

function getRecipe(id) {
    return db('recipe')
        .join('dish', 'recipe.dish_id', '=', 'dish.id')
        .join('ingredient', 'recipe.id', '=', 'ingredient.recipe_id')
        .join('instruction', 'recipe.id', '=', 'instruction.recipe_id')
        .select('dish.name', 'recipe.recipe_name', 'ingredient.ingredient', 'ingredient.quantity')
        //.where({ id: Number(id) })
};

