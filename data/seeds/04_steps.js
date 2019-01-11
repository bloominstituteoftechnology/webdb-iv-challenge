
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipe_steps_table').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipe_steps_table').insert([
        {step: 'combine ingredients into a pizza', step_number: 1, recipe_id: 1},
        {step: 'bake in oven', step_number: 2, recipe_id: 1},
        {step: 'combine ingredients into a pizza', step_number: 1, recipe_id: 2},
        {step: 'bake in oven', step_number: 2, recipe_id: 2}
      ]);
    });
};
