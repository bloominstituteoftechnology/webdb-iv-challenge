
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('dishes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('dishes').insert([
        {id: 1, name: 'burgers'},
        {id: 2, name: 'soups'},
        {id: 3, name: 'pizzas'}
      ]);
    });
};
