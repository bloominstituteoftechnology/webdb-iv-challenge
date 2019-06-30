const knex = require("knex");
const knexConfig = require("../../knexfile.js");
const db = knex(knexConfig.development);

const getDishes = () => {
  return db("dishes");
};

const getDish = id => {
  return db("dishes")
    .where({ id })
    .first();
};

const addDish = dish => {
  return db("dishes").insert(dish);
};

const getRecipes = () => {
  return db("recipes");
};

const addRecipe = recipe => {
  console.log(recipe);
  return db("recipes").insert(recipe);
};

module.exports = { getDishes, getDish, addDish, getRecipes, addRecipe };
