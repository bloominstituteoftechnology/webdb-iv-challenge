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
      .select('recipes.id', 'dishes.dish_name as dish', 'recipes.recipe_name as recipe')
      .join('dishes', 'dishes.id', 'recipes.dish_id')
  },

  getRecipe: (id) => {
    const query01 = db('recipes')
      .select('dishes.dish_name as dish', 'recipes.recipe_name as recipe', 'r.step_number', 'r.description')
      .join('dishes', 'dishes.id', 'recipes.dish_id')
      .join('recipe_instructions as r', 'r.recipe_id', 'recipes.id')
      .where('recipes.id', id)

    const query02 = db('recipes')
      .select('ingredients.ingredient_name as name', 'recipe_ingredients.quantity')
      .join('dishes', 'dishes.id', 'recipes.dish_id')
      .join('recipe_ingredients', 'recipe_ingredients.recipe_id', 'recipes.id')
      .join('ingredients', 'ingredients.id', 'recipe_ingredients.ingredient_id')
      .where('recipes.id', id)

    return Promise.all([query01, query02])
  }
}
