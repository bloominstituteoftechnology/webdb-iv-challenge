const db = require('../data/dbConfig');

module.exports = {
  get_dishes,
  get_dishById,
  get_dish,
  add_dish
};

function get_dishes() {
  return db('dishes');
}

function get_dishById(id) {
  return db('dishes')
    .where({ id })
    .first();
}

function add_dish(dish) {
  return db('dishes')
    .insert(dish)
    .then(ids => {
      return getDishById(ids[0]);
    });
}

function get_dish(id) {
  return db('dishes')
    .innerJoin('recipes', 'recipes.dish_id', 'dishes.id')
    .select({
      dish: 'dishes.Name',
      recipe: 'recipes.Name',
      recipe_id: 'recipes.id',
      id: 'dishes.id'
    })
    .where({ 'dishes.id': id });
  }