const knex = require('knex');

const knexConfig = require('./knexfile.js');
const db = knex(knexConfig.development);

module.exports = {
  getDishes,
  addDishes,
  getDishById,
  getRecipes,
  addRecipes
};

function getDishes() {
    return db('dishes')
}

function addDishes(dish) {
    return db('dishes').insert(dish).into('dishes')
}

function getDishById(id) {
    return db('dishes').where({id})
}

function getRecipes() {
    return db('recipes')
}

function addRecipes(recipe){
    return db('recipes').insert(recipe).into('recipes')
}