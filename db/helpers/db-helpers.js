const knex = require('knex');
const knexConfig = require('../../knexfile');
const db = knex(knexConfig.development);

module.exports = {
  find,
  findById,
  insert,
  findRecipes,
  insertRecipe,
  getShoppingList
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

function findById(id, recipie_id) {
    return db('dishes')
    .join('recipies', {'recipies.dish_id':'dishes.recipie_id'})
    .where({ id: Number(id) });
  }