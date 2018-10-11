
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {id: 1, name: 'Dominos'},
        {id: 2, name: 'In-n-Out'},
        {id: 3, name: 'Telephone'},
        {id: 4, name: 'Car'}
      ]);
    });
};
