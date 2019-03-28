
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {name: 'Baked Garlic Salmon', recipe_id:1},
        {name: 'BBQ Chicken', recipe_id: 2},
      ]);
    });
};
