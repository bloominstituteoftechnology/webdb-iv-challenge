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
  return db('dishes');
}

function addDish(dish) {
  return db('dishes')
    .insert(dish)
    .then(ids => ({ id: ids[0] }));
}

function getDish(id) {
  return db('dishes').where({ id: Number(id) });
}

function getRecipes() {
  return db('recipes');
}

function addRecipe(recipe) {
  return db('recipe')
    .insert(recipe)
    .then(ids => ({ id: ids[0] }));
}
