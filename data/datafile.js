const knex = require('knex');

const knexConfig = require('../knexfile.js');

const db = knex(knexConfig.development);

module.exports = {
  getDishes,
  getDish,
  addDish,
};

function getDishes() {
  return db('dishes')
}

function getDish(id) {
  return db('dishes')
        .where({ id: Number(id) });
}

function addDish(dish) {
  return db('dishes')
        .insert(dish)
        .then(ids => ({ id: ids[0] }))
}

