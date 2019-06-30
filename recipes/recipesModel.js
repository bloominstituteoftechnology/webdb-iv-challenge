const knex = require('knex');

const knexConfig = require('../knexfile');
const db = knex(knexConfig.development);

module.exports = {
  find,
  add,
  update,
  remove,
};

function find() {
  return db('recipes')
    .join('dishes', 'recipes.dish_id', '=', 'dishes.id')
    .select('recipes.id', 'recipes.name', 'dishes.name as dish_name');
}

function add(recipe) {
  return db('recipes')
    .insert(recipe)
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
