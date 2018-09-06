const db = require('knex')(require('../knexfile').development);

module.export = {
  getShoppingList: (recipeId) => {
    return db().select('i.name', 'ir.quantity')
      .from('ingredients as i')
      .join('ingredients-for-recipes as ir', { 'ir.recipe_id': recipeId })
      .groupBy('i.name', 'ir.quantity');
  },

  getDishes: () => {
    return db('dishes');
  },

  addDish: (dish) => {
    return db('dishes').insert(dish);
  },

  getDish: (id) => {
    return db('dishes as d').join('recipes as r', { 'd.id': id });
  },

  getRecipes: () => {
    return db().select('r.name, d.name as dish')
      .from('recipes as r')
      .join('dishes as d', { 'd.id': 'r.dish_id' })
      .groupBy('r.name, d.name');
  },

  addRecipe: (recipe) => {
    return db('recipes').insert(recipe);
  },
};