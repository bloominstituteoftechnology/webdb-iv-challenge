const knex = require("knex");
const knexConfig = require("../../knexfile.js");
const db = knex(knexConfig.development);

module.exports = knex(knexConfig.development);

module.exports = {
  getDishes,
  getDish,
  addDish
};

function getDishes() {
  return db("dishes").select("*");
}

function getDish(dishId) {
  return db("dishes")
    .join("recipes", "dishes.id", "=", "recipes.dish_id")
    .select("dishes.dish_name", "recipes.recipe_name")
    .where("recipes.dish_id", dishId);
}

function addDish(dish) {
  return db.insert(dish).into("dishes");
}
