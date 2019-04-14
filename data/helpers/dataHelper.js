const knex = require("knex");
const knexConfig = require("../../knexfile");

const db = knex(knexConfig.development);

module.exports = {
  getDishes() {
    return db("dishes");
  },
  addDish(dish) {
    return db.insert(dish).into("dishes");
  },
  getDish(id) {
    return db("dishes").where({ id: id });
  },
  getRecipes() {
    return db("recipes");
  },
  addRecipes(recipe) {
    return db.insert(recipe).into("recipes");
  }
};
