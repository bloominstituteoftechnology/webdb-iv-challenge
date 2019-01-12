
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('instructions').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('instructions').insert([
        {id: 1, step: 1, description: 'stir for 12 mins', recipe_id: 2},
        {id: 2, step: 2, description: 'pour into pan', recipe_id: 3},
        {id: 3, step: 3, description: 'bake for 45 mins', recipe_id: 1}
      ]);
    });
};
