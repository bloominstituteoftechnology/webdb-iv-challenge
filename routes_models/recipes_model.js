const db = require('../data/dbConfig');

module.exports = {
  get_recipes,
  get_recipeById,
  add_recipe
};

function get_recipes() {
  return db('recipes')
    .innerJoin('dishes', 'recipes.dish_id', 'dishes.id')
    .select({
      dish: 'dishes.Name',
      recipe: 'recipes.Name',
      dish_id: 'recipes.dish_id',
      id: 'recipes.id'
    });
}

function get_recipeById(id) {
  return db('recipes')
    .where({ id })
    .first();
}

function add_recipe(recipe) {
  return db('recipes')
    .insert(recipe)
    .then(ids => {
      return get_recipeById(ids[0]);
    });
}