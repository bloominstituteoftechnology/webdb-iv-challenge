
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {name: 'New York Steak', recipe_id: 2},
        {name: 'Salmon Lovers Roll', recipe_id: 3},
        {name: 'Moms Spaghetti', recipe_id: 1}
      ]);
    });
};
