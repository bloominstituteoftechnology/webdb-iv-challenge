
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipe_steps')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('recipe_steps').insert([
        {id: 1, 'step #': 1, description: 'boil water', recipe_id: 1},
        {id: 2, 'step #': 2, description: 'throw in noodles', recipe_id: 1},
        {id: 3, 'step #': 3, description: 'grease up pan', recipe_id: 2},
        {id: 4, 'step #': 4, description: 'fry the fish', recipe_id: 2}
      ]);
    });
};
