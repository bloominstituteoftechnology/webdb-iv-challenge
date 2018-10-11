
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {recipe_id: 1, step: '1', description: 'peel onions'},
        {recipe_id: 2, step: '1', description: 'wash hands'},
        {recipe_id: 3, step: '1', description: 'set heat'}
      ]);
    });
};
