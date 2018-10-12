exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients')
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex('ingredients').insert([
        { id: 1, name: 'eggs' },
        { id: 2, name: 'milk' },
        { id: 3, name: 'flour' },
      ]);
    });
};
