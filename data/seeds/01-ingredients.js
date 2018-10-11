
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {ingredient: 'flour'},
        {ingredient: 'tomato sauce'},
        {ingredient: 'pineapple'},
        {ingredient: 'ham'},
        {ingredient: 'cheese'},
        {ingredient: 'fish'},
        {ingredient: 'steak'}
      ]);
    });
};
