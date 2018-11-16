const ingredients = require('../data/ingredients');

exports.seed = function(knex, Promise) {
  return knex('ingredients')
    .truncate()
    .then(function() {
      return knex('ingredients').insert(ingredients);
    });
};
