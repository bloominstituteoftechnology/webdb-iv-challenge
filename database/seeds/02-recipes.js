const recipes = require('../data/recipes');

exports.seed = function(knex, Promise) {
  return knex('recipes')
    .truncate()
    .then(function() {
      return knex('recipes').insert(recipes);
    });
};
