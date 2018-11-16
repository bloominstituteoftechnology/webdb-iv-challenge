const db = require('../dbConfig.js');

module.exports = {
  getDishes() {
    return db('dishes');
  },
  addDish(dish) {
    return db('dishes').insert(dish);
  },
  getDish(id) {
    return db('dishes as d')
      .join('recipes as r', 'r.dish_id', 'd.id')
      .where('d.id', id)
      .select('d.name', 'r.name');
  },
  getRecipes() {
    return db('recipes');
  },
  addRecipe(recipe) {
    return db('recipes').insert(recipe);
  }
};
