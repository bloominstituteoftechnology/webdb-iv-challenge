const knex = require('knex');
const knexConfig = require('./knexfile');

const db = knex(knexConfig.development);

module.exports = {
    getDishes,
    addDish,
    getDish,
    getRecipes,
    addRecipe,
};

function getDishes() {
    return db('dishes');
}

function addDish(dish) {
    db.insert('dish');
}

function getDish(id) {
    return db('dish_name');
}

function getRecipes() {
    return db('recipes');
}

function addRecipe(recipe) {
    db.insert('recipe');
}