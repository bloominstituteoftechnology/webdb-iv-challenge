
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('dishes').del()
    .then(function () {
      // Inserts seed entries
      return knex('dishes').insert([
        {id: 1, dish: 'Chicken Soup'},
        {id: 2, dish: 'Carrot Soup'},
        {id: 3, dish: 'Pea Soup'}
      ]);
    });
};
