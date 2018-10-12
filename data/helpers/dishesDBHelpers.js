const knex = require("knex");
const knexConfig = require("../../knexfile");
const db = knex(knexConfig.development);

function getDishes() {
  return db('dishes').select('*');
}

function getDish(id) {
  return db('dishes').select('*').where({id}).first();
}

function addDish(dish) {
  return db.insert(dish).into('dishes');
}

module.exports = {
  getDishes,
  getDish,
  addDish
}