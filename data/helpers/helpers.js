const DB = require("../dbConfig");

module.exports = {
  getDishes: function() {
    return DB(dishes);
  },
  addDish: function(dish) {
    return DB(dishes).insert(dish);
  },
  getDish: function(id) {
    return DB(dishes).where("id", id);
  },
  getRecipes: function() {
    return DB("recipes");
  },
  addRecipe: function(recipe) {
    return DB("recipes").insert(recipe);
  }
};
