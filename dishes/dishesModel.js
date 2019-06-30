const knex = require('knex');

const knexConfig = require('../knexfile');
const db = knex(knexConfig.development);

module.exports = {
  find,
  findById,
  add,
  update,
  remove,
};

function find() {
  return db('dishes');
}

function findById(id) {
  return db('dishes')
    .join('recipes', 'dishes.id', '=', 'recipes.dish_id')
    .select('dishes.name', 'recipes.name as recipes')
    .where({ 'dishes.id': id });
}

function add(dishes) {
  return db('dishes')
    .insert(dishes)
    .into('dishes');
}

function update(id, changes) {
  return db('dishes')
    .where({ id })
    .update(changes);
}

function remove(id) {
  return db('dishes')
    .where({ id })
    .del();
}
