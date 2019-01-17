const knex = require('knex');
const knexConfig = require('./knexfile.js');
const db = knex(knexConfig.development);

module.exports = {
    getDishes,
    addDish,
    getDish,
    getRecipes,
    addRecipe,
    getRecipe,
    getShoppingList
};

function getDishes(){
    return db('dishes')
}

function getDish(id){
    return db('dishes').where({ id: Number(id) });
}

function addDish(dish) {
    return db('dishes')
    .insert(dish)
    .then(ids => ({ id: ids[0] }));
}

function getRecipes(){
    return db('recipes')
}

function getRecipe(recipe){
    return db('recipes')
    .insert(recipe)
    .then(ids => ({ id: ids[0] }));
}

function addRecipe(recipe){
    return db('recipes')
    .insert(recipe)
    .then(ids => ({ id: ids[0] }));
}

function getShoppingList(id){
    return db('recipes as r').where('r.id', id)
    .join('dishes as d', 'r.dish_id', '=', 'd.id')
    .join('recipeIngredients as ri', 'r.id', '=', 'ri.recipe_id')
    .join('ingredients as i', 'ri.ingredient_id', '=', 'i.id')
    .select('d.name as dish', 'r.name', 'i.name as ingredient', 'ri.ingredient_quantity')
}