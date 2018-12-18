const knex = require("knex");
const knexConfig = require("../knexfile");
const db = knex(knexConfig.development);

// Helper methods
module.exports = {
  getDishes: () => {
    return db("dishes");
  },
  getDish: id => {
    return db("dishes").where({ "dishes.id": id });
  },
  addDish: dish => {
    return db("dishes").insert(dish);
  },
  getRecipes: () => {
    return db("recipes");
  },
  getRecipe: id => {
    return db("recipes");
  },
  addRecipe: recipe => {
    return db("recipes").insert(recipe);
  },
  getIngredients: () => {
    return db("ingredients");
  },
  addIngredient: ingredient => {
    return db("ingredients").insert(ingredient);
  }
};
