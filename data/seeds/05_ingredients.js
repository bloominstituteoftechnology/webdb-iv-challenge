
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {id: 1, name: 'lemons', quantity: 12},
        {id: 2, name: 'onions', quantity: 7},
        {id: 3, name: 'selt', quantity: 2}
      ]);
    });
};
