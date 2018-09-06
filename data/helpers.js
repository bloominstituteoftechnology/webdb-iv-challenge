const knex = require("knex");

const dbConfig = require("./knexfile");

const db = knex(dbConfig.development);

// getDishes(): should return a list of all dishes in the database.
// addDish(dish): should add the dish to the database and return the id of the new dish.
// getDish(id): should return the dish with the provided id and include a list of the related recipes.
// getRecipes(): should return a list of all recipes in the database including the dish they belong to.
// addRecipe(recipe): should add a recipe to the database and return the id of the new recipe.

function getDishes() {
  return db("dishes");
}

function addDish(dish) {
  return db("dishes").insert(dish);
}

function getDish(id) {
  return db("dishes").join("recipes", "recipes.dish_id", "dishes.id").where("dishes.id", id);
}

function getRecipes() {
    return db("recipes");
  }
  
  function addRecipe(recipe) {
    return db("recipes").insert(recipe);
  }


