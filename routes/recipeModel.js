const knex = require('knex');

const knexConfig = require('../knexfile.js');
const db = knex(knexConfig.development);

module.exports = {
  getDishes,
  getDish,
  addDish,
  getRecipes,
  addRecipe,
};

// Returns all the dishes
function getDishes() {
  return db('dish');
}

// Returns the dish with the corresponding ID
function getDish(id) {
  return db.select('*').from('dish').where('dish.id', id).leftJoin('recipe', 'dish.id', 'recipe.dish_id');
}

// Inserts the new dish, returns 1
function addDish(dish) {
  return db('dish').insert(dish).into('dish');
}

// Returns all the recipes
function getRecipes() {
    return db.select('*').from('recipe').leftJoin('dish', 'recipe.dish_id', 'dish.id');
}

// Inserts the new recipe, returns 1
function addRecipe(recipe) {
  return db('recipe').insert(recipe);
}