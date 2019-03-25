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

function getShoppingList(id, recipie_id) {
    return db('recipies')
    .join('dishes', {'recipies.dish_id':'dishes.recipie_id'})
    .join ('ingredients', {'recipies.ingredient_id':'ingredients.id'})
    .join ('quantities', {'recipies.quantity_id':'quantities.id'})
    .select('dish.name', 'recipies.name', 'ingredients.name', 'quantities.name', 'quantities.amount')
    .where({ 
        'dishes.id': Number(id),
        'recipie.id': Number(recipie_id)
    });
  }