const knex = require('knex');
const knexConfig = require('../knexfile');
const db = knex(knexConfig.development);

module.exports = {
  // should return a list of all dishes in the database.
  getDishes: function() {
    return db('dishes');
  },
  // should add the `dish` to the database and return the `id` of the new `dish`.
  addDish: function(dish) {
    return db.insert(dish).into('dishes');
  },
  // should return the `dish` with the provided `id` and include a list of the related recipes.
  getDish: async function(id) {
    try {
      const dish = await db('dishes').where({ id });
      const recipies = await db
        .select('name as recipie')
        .from('recipies')
        .where({ dish_id: id });
      return {
        dish: dish[0].name,
        recipies: recipies.map(recipie => recipie.recipie)
      };
    } catch (error) {
      console.log(error);
    }
  },

  // should return a list of all recipes in the database including the `dish` they belong to.
  getRecipies: async function() {
    try {
      const recipies = await db
        .select('recipies.name as recipie', 'dishes.name as dish')
        .from('recipies')
        .join('dishes', 'recipies.dish_id', 'dishes.id');
      return {
        recipies
      };
    } catch (error) {
      console.log(error);
    }
  },

  // should add a `recipe` to the database and return the `id` of the new `recipe`
  addRecipe: function(recipe) {
    return db.insert(recipe).into('recipies');
  }
};
