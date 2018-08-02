
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {ingredient: 'ingredient 1'},
        {ingredient: 'ingredient 2'},
        {ingredient: 'ingredient 3'},
        {ingredient: 'ingredient 4'},
        {ingredient: 'ingredient 5'},
        {ingredient: 'ingredient 6'},
        {ingredient: 'ingredient 7'}
      ]);
    });
};
