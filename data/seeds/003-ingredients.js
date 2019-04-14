
exports.seed = function(knex, Promise) {
  // Inserts seed entries
  return knex('ingredients').insert([
    {name: 'flour'},
    {name: 'corn'},
    {name: 'eggs'}
  ]);
};

