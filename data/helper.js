const knex = require("knex");
const knexConfig = require("../knexfile");
const db = knex(knexConfig.development);

// Helper methods
module.exports = {
  getDishes: () => {
    return db("dishes");
  },
  getDish: id => {
    return db("dishes");
  },
  addDish: dish => {
    return db("dishes");
  },
  getRecipes: () => {
    return db("recipes");
  },
  getRecipe: id => {
    return db("recipes");
  },
  addRecipe: recipe => {
    return db("recipes");
  },
  getIngredients: () => {
    return db("ingredients");
  },
  addIngredient: ingredient => {
    return db("ingredients");
  }
};
