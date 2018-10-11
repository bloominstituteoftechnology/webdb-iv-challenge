const knex = require('knex');

const knexConfig = require('../knexfile.js');
const db = knex(knexConfig.development);

module.exports = {
  getDishes,
  getDish,
  addDish,
};

function getDishes(){
  return db('dishes');
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