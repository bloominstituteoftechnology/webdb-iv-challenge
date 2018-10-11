const knex = require('knex');

const knexConfig = require('../knexfile.js');
const db = knex(knexConfig.development);

module.exports = {
  getRecipes,
  getRecipe,
  addRecipe,
  update,
  remove,
};

function getRecipes() {
  return db('recipes');
}

function getRecipe(id) {
  return db('recipes')
    .where({ id })
    .first();
}

function addRecipe(course) {
  return db('recipes')
    .insert(course)
    .into('recipes');
}

function update(id, changes) {
  return db('recipes')
    .where({ id })
    .update(changes);
}

function remove(id) {
  return db('recipes')
    .where({ id })
    .del();
}