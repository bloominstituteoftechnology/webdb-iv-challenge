const knex = require("knex");
const dbconfig = require("../knexfile");
const db = knex(dbconfig.development);

module.exports = {
  getDishes: function(id) {
    if (id) {
      const promises = [db("dishes"), this.getRecipes(id)]; // [ dishes, recipes ]

      return Promise.all(promises).then(function(results) {
        let [dishes, recipes] = results;
        let dish = dishes[id - 1];
        dish.recipes = recipes.map(r => r.recipe_name);

        return dish;
      });
    }

    return db("dishes");
  },

  getRecipes: function(id) {
    return db("dishes")
      .select("recipes.recipe_name")
      .join("recipes", "recipes.dish_id", "dishes.id")
      .where("dishes.id", id);
  },

  addDish: function(input) {
    const dish = input;
    if (dish != null && dish.name != "") {
      db("dishes").insert(dish);
    }
  }
};
