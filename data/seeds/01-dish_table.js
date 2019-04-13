exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('dishes')
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex('dishes').insert([
        { dish_name: 'Tacos' },
        { dish_name: 'Pasta' },
        { dish_name: 'Burger' }
      ]);
    });
};
