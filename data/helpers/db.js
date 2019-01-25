const knex = require('knex')

const dbConfig = require('../../knexfile')
const db = knex(dbConfig.development)

module.exports = {
  getDishes: (id) => {
    if(id) {
      return db('dishes').where('id', id)
    } 
    return db('dishes')
  },

  addDish: (dish) => {
    return db('dishes').insert(dish)
  },

  getRecipes: (id) => {
    if(id) {
      // find way to join tables also return  the name of dish + ingredients
      return db('recipes')
        .select(['dishes.dish_name','recipes.recipe_name']).from('recipes').leftJoin('dishes', 'recipes.dish_id', 'dishes.id').where('recipes.id', id)

    }
    return db('recipes').leftJoin('dishes', 'recipes.dish_id', 'dishes.id')
  },

  getIngredients: (id) => {
    return db('recipes')
        .select(['dishes.dish_name','recipes.recipe_name','ingredients.ingredient_name']).from('recipes').leftJoin('recipes_ingredients','recipes.id','recipes_ingredients.recipe_id').leftJoin('ingredients', 'recipes_ingredients.ingredient_id', 'ingredients.id').leftJoin('dishes', 'recipes.dish_id', 'dishes.id').where('recipes.id', id)
  },

  addRecipe: (recipe) => {
    return db('recipes').insert(recipe)
  },

}

