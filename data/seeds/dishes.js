exports.seed = function(knex, Promise) {
  return knex('dishes').truncate()
  .then(function() {
    return knex('dishes').insert([
      {id: 1, name: 'hot dog'},
      {id: 2, name: 'hamburger'},
      {id: 3, name: 'cheeseburger'}
    ]);
  });
};