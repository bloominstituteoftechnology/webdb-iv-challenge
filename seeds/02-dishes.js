
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('dishes').del()
    .then(function () {
      // Inserts seed entries
      return knex('dishes').insert([
        { dish_name: 'breakfast'},
        { dish_name: 'dinner'}
      ]);
    });
};
