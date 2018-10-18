
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {recipe_id: 1, name: 'flour'},
        {recipe_id: 2, name: 'tomato'},
        {recipe_id: 3, name: 'potato'}
      ]);
    });
};
