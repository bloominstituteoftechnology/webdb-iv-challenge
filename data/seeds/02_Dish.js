
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('Dishes').del()
    .then(function () {
      // Inserts seed entries
      return knex('Dishes').insert([
        { dish_name: 'breakfast'},
        { dish_name: 'appetizer'}
      ]);
    });
};
