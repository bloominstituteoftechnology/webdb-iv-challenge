const knex = require('knex')
const knexConfig = require('../knexfile.js')
const db = knex(knexConfig.development)

module.exports = {
  // should return a list of all dishes in the database.
  getDishes: () => {
    return db('dishes')
  },

  // should add the `dish` to the database and return the `id` of the new `dish`.
  addDish: dish => {
    return db('dishes').insert(dish)
  },

  // should return the `dish` with the provided `id` and include a list of the related recipes.
  getDish: id => {
    return db('dishes')
      .join('recipes', { 'dishes.id': 'recipes.dish_id' })
      .select('dishes.name as dish', 'recipes.name as recipe')
      .where({ 'dishes.id': id })
  },

  // should return a list of all recipes in the database including the `dish` they belong to.
  getRecipes: () => {
    return db('recipes')
      .join('dishes', { 'dishes.id': 'recipes.dish_id' })
      .select('recipes.id', 'recipes.name as recipe', 'dishes.name as dish')
  },

  // should add a `recipe` to the database and return the `id` of the new `recipe`.
  addRecipe: recipe => {
    return db('recipes').insert(recipe)
  },

  getRecipe: async id => {
    const info = await db('recipes as r')
      .join('dishes as d', { 'd.id': 'r.dish_id' })
      .select('d.name as dish', 'r.name as recipe')
      .where({ 'r.id': id })

    const ingredients = await db('recipes as r')
      .join('recipe_ingredients as ri', { 'ri.recipe_id': 'r.id' })
      .join('ingredients as i', { 'ri.ingredient_id': 'i.id' })
      .select('i.name as ingredient')
      .where({ 'r.id': id })

    const steps = await db('recipes as r')
      .join('steps as s', { 's.recipe_id': 'r.id' })
      .select('s.step', 's.action')
      .where({ 'r.id': id })

    const formatted = {
      ...info[0],
      ingredients: ingredients.map(({ ingredient }) => ingredient),
      steps: steps.map(({ step, action }) => `${step}. ${action}`)
    }

    return formatted
  }
}
