const db = require('knex')(require('../knexfile').development);

module.exports = {
  getShoppingList: (recipeId) => {
    return db().select('i.name', 'ir.quantity')
      .from('ingredients as i')
      .join('ingredients-for-recipes as ir', { 'ir.recipe_id': recipeId })
      .groupBy('i.name', 'ir.quantity');
  },

  getDishes: () => {
    return db('dishes');
  },

  getDish: (id) => {
    return db('dishes').where({ id }).then(d => {
      const name = d[0].name;

      return db('dishes as d').where({ 'd.id': id })
        .join('recipes', { 'd.id': 'recipes.dish_id' })
        .reduce((dish, recipe) => {
          return Object.assign(dish, { recipes: [...dish.recipes, recipe] });
        }, { id, name, recipes: [] });
      });
  },

  addDish: (dish) => {
    return db('dishes').insert(dish);
  },

  deleteDish: (id) => {
    return db('dishes').where({ id }).del();
  },

  getRecipes: () => {
    return db('dishes as d')
      .select('r.name as recipe', 'd.name as dish')
      .join('recipes as r', { 'd.id': 'r.dish_id' });
  },

  addRecipe: (recipe) => {
    return db('recipes').insert(recipe);
  },
};