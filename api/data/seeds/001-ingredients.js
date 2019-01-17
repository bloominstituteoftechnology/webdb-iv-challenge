
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {name: 'mozzerella_cheese'},
        {name: 'ground_beef'},
        {name: 'roma_tomatoes'}
      ]);
    });
};
