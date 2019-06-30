const knex = require('knex');

const knexConfig = require('./knexfile.js');
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
    .where({ id })
    .first();
}

// function findStudentsById(id) {
//   return db('students')
//     .where('dish_id', id);
// }

function add(dish) {
  return db('dishes')
    .insert(dish)
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

// repository pattern for data access