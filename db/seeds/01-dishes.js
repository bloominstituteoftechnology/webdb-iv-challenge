
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('dishes').del()
    .then(function () {
      // Inserts seed entries
      return knex('dishes').insert([
        {name: 'Tacos', recipe_id: '1'},
        {name: 'Pizza', recipe_id: '2'},
      ]);
    });
};
