
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('steps').del()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        //two step
        {StepNumber: 1, description: 'make', recipe_id: 1},
        {StepNumber: 2, description: 'bake', recipe_id: 1},
        {StepNumber: 1, description: 'shake', recipe_id: 2},
        {StepNumber: 2, description: 'quake', recipe_id: 2},
        {StepNumber: 1, description: 'lake', recipe_id: 3},
        {StepNumber: 2, description: 'fake', recipe_id: 3},
        {StepNumber: 1, description: 'cake', recipe_id: 4},
        {StepNumber: 2, description: 'rake', recipe_id: 4},
      ]);
    });
};
