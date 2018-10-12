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

function getDishes(){
    return db('dishes');
};

function addDish(dish){
    return db('dishes').insert(dish);
};

function getDish(id){
    return db('dishes')
        .select({dish_name:'dishes.name', recipe_name:'recipes.name'})
        .join('recipes','recipes.dish_id','dishes.id')
        .where('dishes.id', id);
};

function getRecipes(){
    return db('recipes');
};

function addRecipe(recipe){
    return db('recipes').insert(recipe);
};