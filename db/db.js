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
    return db('dishes').where({ id });
  },

  getRecipes: () => {
    return db('recipes');
  },

  addRecipe: (recipe) => {
    return db('recipes').insert(recipe);
  },
};