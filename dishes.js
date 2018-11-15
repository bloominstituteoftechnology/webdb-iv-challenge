const knex = require("knex");

const knexConfig = require("./knexfile.js");

const db = knex(knexConfig.development);

module.exports = {
  getDishes,
  getDish,
  addDish,
};

function getDishes() {
  return db("dishes");
}

function getDish(id) {
  return db("dishes")
    .select("dishes.name", "recipes.name as recipes")
    .join("recipes", "dishes.id", "=", "recipes.dish_id")
    .where({ "dishes.id": id });
}

function addDish(dishes) {
  return db("dishes")
    .insert(dishes)
    .into("dishes");
}
