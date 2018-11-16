const recipesIngredients = require('../data/recipesIngredients');

exports.seed = function(knex, Promise) {
  return knex('recipes_ingredients')
    .truncate()
    .then(function() {
      return knex('recipes_ingredients').insert(recipesIngredients);
    });
};
