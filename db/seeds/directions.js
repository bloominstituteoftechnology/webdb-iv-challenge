
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('directions').del()
    .then(function () {
      // Inserts seed entries
      return knex('directions').insert([
        {step_number: 1, step: 'do this 1', recipe_id: 1},
        {step_number: 2, step: 'do this 2', recipe_id: 1},
        {step_number: 3, step: 'do this 3', recipe_id: 1},
        {step_number: 1, step: 'do this 1', recipe_id: 2},
        {step_number: 2, step: 'do this 2', recipe_id: 2},        
        {step_number: 1, step: 'do this 1', recipe_id: 3},
        {step_number: 2, step: 'do this 2', recipe_id: 3},
        {step_number: 3, step: 'do this 3', recipe_id: 3},
        {step_number: 4, step: 'do this 4', recipe_id: 3}     
      ]);
    });
};
