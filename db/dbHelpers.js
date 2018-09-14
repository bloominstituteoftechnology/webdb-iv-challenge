const knex = require("knex");

const dataConfig = require("./knexfile");
const db = knex(dataConfig.development);

module.exports = {
  getDishes,
  addDish,
  getDish,
  getRecipes,
  addRecipe
};

function getDishes() {
  return db("dishes");
}

function addDish(name) {
  return db("dishes").insert({ name });
}

function getDish(id) {
  return db("recipes").where({ dish_id: id });
}

function getRecipes() {}

function addRecipe() {}

db.getRecipes().then();
