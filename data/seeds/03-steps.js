
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('steps').del()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        {step_number: '1', description: 'Step 1', recipe_id: 1},
        {step_number: '2', description: 'Step 2', recipe_id: 1},
        {step_number: '1', description: 'Step 1', recipe_id: 2},
        {step_number: '2', description: 'Step 2', recipe_id: 2},
        {step_number: '1', description: 'Step 1', recipe_id: 3},
        {step_number: '2', description: 'Step 2', recipe_id: 3},
        {step_number: '1', description: 'Step 1', recipe_id: 4},
        {step_number: '2', description: 'Step 2', recipe_id: 4},
        {step_number: '1', description: 'Step 1', recipe_id: 5},
        {step_number: '2', description: 'Step 2', recipe_id: 5},
        {step_number: '1', description: 'Step 1', recipe_id: 6},
        {step_number: '2', description: 'Step 2', recipe_id: 6},
      ]);
    });
};
