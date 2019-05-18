
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {recipe_name: 'Cheese'},
        {recipe_name: 'Fish'},
        {recipe_name: 'Steak'}
      ]);
    });
};
