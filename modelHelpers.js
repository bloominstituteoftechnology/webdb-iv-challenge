//Setting up database
const dbConfig = require('./knexfile');
const knex = require('knex');

const db = knex(dbConfig.development);

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
  return db('dishes').insert(dish);
}

function getDish(id) {
  return db('dishes')
    .where({ id })
    .first();
}

function getRecipes() {
  return db('recipes');
}

function addRecipe(recipe) {
  return db('recipes').insert(recipe);
}
