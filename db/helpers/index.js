const db = require('knex')(require('../../knexfile').development);

module.exports = {
  getDishes() {
    return db('dishes');
  },

  addDish(dish) {
    return db('dishes').insert(dish);
  },

  getDish(id) {
    return db('dishes')
      .select({
        dish_name: 'dishes.name',
        recipe_name: 'recipes.name',
      })
      .join('recipes', 'recipes.dish_id', 'dishes.id')
      .where('dishes.id', id);
  },

  getRecipes() {
    return db('recipes');
  },

  addRecipe(recipe) {
    return db('recipes').insert(recipe);
  },
};
