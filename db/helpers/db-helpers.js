const knex = require('knex');
const knexConfig = require('../../knexfile');
const db = knex(knexConfig.development);

module.exports = {
  find,
  findById,
  insert,
  findRecipes,
  insertRecipe,
};

function find() {
  return db('dishes');
}

function findById(id) {
  return db('dishes').where({ id: Number(id) });
}

function insert(dish) {
  return db('dishes')
    .insert(dish)
    .then(ids => ({ id: ids[0] }));
}

function findRecipes() {
    return db('recipies');
}

function insertRecipe(recipie) {
    return db('recipies')
        .insert(recipie)
        .then(ids => ({ id: ids[0] }));
}