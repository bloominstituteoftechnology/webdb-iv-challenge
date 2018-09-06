const knex = require('knex')
const knexConfig = require('../knexfile')

const db = knex(knexConfig.development)

const getDishes = async () => {
  return await db.select().table('dish')
}

const getDish = async (id) => {
  return await db.select().table('dish').where('id', id)
}

const getRecipes = async () => {
  return await db.select().table('recipe')
}

const addDish = async (dish) => {
  await db.insert(dish).table('dish')
  return dish.id
}

const addRecipe = async (recipe) => {
  await db.insert(recipe).table('recipe')
  return recipe.id
}