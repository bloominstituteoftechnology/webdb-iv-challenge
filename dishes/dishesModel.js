const knex = require('knex');

const knexConfig = require('../knexfile.js');
const db = knex(knexConfig.development);

module.exports = {
  getDishes,
  getDish,
  addDish,
  update,
  remove,
};

function getDishes() {
  return db('dishes');
}

function getDish(id) {
  return db('dishes')
    .where({ id })
    .first();
}

function addDish(course) {
  return db('dishes')
    .insert(course)
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