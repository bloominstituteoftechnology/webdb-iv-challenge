const dishes = require('../data/dishes');

exports.seed = function(knex, Promise) {
  return knex('dishes')
    .truncate()
    .then(function() {
      return knex('dishes').insert(dishes);
    });
};
