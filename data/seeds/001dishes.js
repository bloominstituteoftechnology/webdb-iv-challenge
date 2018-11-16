exports.seed = function(knex, Promise) {
  return knex('dishes').truncate()
    .then(function () {
      return knex('dishes').insert([
        {id: 1, name: 'pizza'},
        {id: 2, name: 'hotdogs'}
      ]);
    });
};