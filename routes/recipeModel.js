const knex = require('knex');

const knexConfig = require('../../knexfile.js');
const db = knex(knexConfig.development);

module.exports = {
  get,
  getById,
  post,
  update,
  remove,
};

// Returns all the dishes
function getDish() {
  return db('dish');
}

// Returns the dish with the corresponding ID
function getDishe(id) {
  return db('dish').where({ id }).first();
}

// Inserts the new dish, returns 1
function addDish(dish) {
  return db('dish').insert(dish);
}

// Returns all the recipes
function getRecipes() {
    return db('recipe');
}

// Inserts the new recipe, returns 1
function addRecipe(recipe) {
  return db('recipe').insert(recipe);
}