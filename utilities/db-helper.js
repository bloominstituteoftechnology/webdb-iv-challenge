const db = require('../data/db')

module.exports = {
  getDishes: () => {
    return db('dishes').select('name as dish')
  },

  getDish: (id) => {
    return db('dishes')
      .select('dishes.name as dish', 'recipes.name as recipe')
      .join('recipes', 'recipes.dishId', 'dishes.id')
      .where('dishes.id', id)
  },

  addDish: (dish) => {
    return db('dishes')
      .insert(dish)
  },

  getRecipes: () => {
    return db('recipes')
      .select('recipes.name as recipe', 'dishes.name as dish')
      .join('dishes', 'dishes.id', 'recipes.dishId')
  }
}
