const knex = require('knex');

const dbConfig = require('../knexfile.js')

const db = knex(dbConfig.development);


module.exports = {

  getDishes: () => {
    return db('dishes');

  },

  addDish: (dish) => {
    return db("dishes")
    .insert(dish)
  },

  getDish: (id) =>{
    return db('dishes')
    .join("recipes", "dishes.id", "=", "recipes.dish_id")
    .select("dishes.id", "dishes.dish_name", { recipe: "recipes.recipe_name" })
    .where({ "dishes.id": id })
  },
 getRecipes: () =>{
  return db('recipes')
  .join('dishes', "recipes.dish_id", '=', "dishes.id")
  .select("recipes.id", "recipes.recipe_name", { dish: "dishes.dish_name" })
  
  },
  // addRecipe: (recipe) =>{
  //   return db("recipes")
  //   .insert(recipe)
  // }
}