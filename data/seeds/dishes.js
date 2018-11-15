
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('dishes').del()
    .then(function () {
      // Inserts seed entries
      return knex('dishes').insert([
        {id: 1, name: 'Pizza'},
        {id: 2, name: 'Sandwich'},
        {id: 3, name: 'Pasta'}
      ]);
    });
};
