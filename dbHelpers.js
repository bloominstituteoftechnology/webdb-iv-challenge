const knex = require('knex');
const knexConfig = require('../knexfile');

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

function addDish(dish) {
    return db('dishes')
    .insert(dish)
    .then(id => {
        return id
    })
}

function getDish(id) {
    return db('dishes')
    .select('dishes.name', 'recipes.name')
    .where('id', id)
    .then(id => {
        return db('recipes').where('id', id)
    })
}

function getDish(id){
    return db('dishes')
}

function getRecipes() {
    return db('recipes')
    .select('dishes')
    .where('dish_id', 'recipes')
}


function addRecipe(recipe) {
    return db('recipes')
    .insert(recipe)
    return recipe.id
}