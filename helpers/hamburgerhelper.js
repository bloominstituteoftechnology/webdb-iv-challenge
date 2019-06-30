const knex = require('knex');

const knexConfig = require('../knexfile.js');
const db = knex(knexConfig.development);

module.exports = {
  getDishes,
  getRecipes,
  getDish,
  addDish,
  addRecipe,
};

function getDishes() {
  return db('dishes');
}

function getRecipes() {
  return db('recipes');
}

function getDish(id) {
  return db('dishes')
    .where({ id })
    .first();
}

function addDish(dish) {
  return db('dishes')
    .insert(dish)
    .into('dishes');
}

function addRecipe(recipe) {
  return db('recipes')
    .insert(recipe)
    .into('recipes');
}


function update(id, changes) {
  return db('courses')
    .where({ id })
    .update(changes);
}

function remove(id) {
  return db('courses')
    .where({ id })
    .del();
}