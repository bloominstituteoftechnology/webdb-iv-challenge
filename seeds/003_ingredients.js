
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {id: 1, name: 'chicken'},
        {id: 2, name: 'parmesan'},
        {id: 3, name: 'broth'}
      ]);
    });
};
