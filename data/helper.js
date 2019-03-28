const knex = require("knex");
const knexConfig = require("../knexfile");
const db = knex(knexConfig.development);

// Helper methods
module.exports = {
  getDishes: () => {
    return db("dishes");
  },
  getDish: id => {
    return db("dishes")
      .where({ "dishes.id": id })
      .join("recipes", { "dishes.id": "recipes.dishId" })
      .select("recipes.name as recipe", "dishes.name as dish");
  },
  addDish: dish => {
    return db("dishes").insert(dish);
  },
  getRecipes: () => {
    return db("recipes")
      .join("dishes", { "dishes.id": "recipes.recipeId" })
      .select("recipe.id", "recipes.name as recipe", "dishes.name as dish");
  },
  getRecipe: id => {
    return db("recipeToIngredientMap")
      .where({ "recipeToIngredientMap.recipeId": id })
      .join("recipes", { "recipeToIngredientMap.recipeId": "recipes.id" })
      .join("dishes", { "recipes.dishId": "dishes.id" })
      .leftJoin("ingredients", {
        "recipeToIngredientMap.ingredientId": "ingredients.id"
      })
      .select(
        "dishes.name as dish",
        "recipes.name as recipe",
        "ingredients.name as ingredients",
        "recipeToIngredientMap.quantity as quanitity"
      );
  },
  addRecipe: recipe => {
    return db("recipes").insert(recipe);
  },
  getIngredients: () => {
    return db("ingredients");
  }
};
