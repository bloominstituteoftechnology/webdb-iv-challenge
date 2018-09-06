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

  addDish: (dish) => {
    return db('dishes').insert(dish);
  },

  getDish: (id) => {
    return db('dishes').where({ id }).then(d => {
      const name = d[0].name;
      
      return db('dishes as d').where({ 'd.id': id })
        .join('recipes', { 'd.id': 'recipes.dish_id' })
        .reduce((dish, recipe) => {
          return Object.assign(dish, { recipes: dish.recipes.concat([recipe]) });
        }, { id, name, recipes: [] });
      });
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