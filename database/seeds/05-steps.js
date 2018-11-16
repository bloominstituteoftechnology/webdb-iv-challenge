const steps = require('../data/steps');

exports.seed = function(knex, Promise) {
  return knex('steps')
    .truncate()
    .then(function() {
      return knex('steps').insert(steps);
    });
};
