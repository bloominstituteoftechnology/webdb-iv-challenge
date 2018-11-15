
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('instruction')
  .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('instruction').insert([
        {recipe_id: 1, name: 'instruction1', step_number: 1},
        {recipe_id: 1, name: 'instruction2', step_number: 2},
        {recipe_id: 2, name: 'instruction1', step_number: 1},
        {recipe_id: 2, name: 'instruction2', step_number: 2},
        {recipe_id: 3, name: 'instruction1', step_number: 1},
        {recipe_id: 3, name: 'instruction2', step_number: 2},
        {recipe_id: 4, name: 'instruction1', step_number: 1},
        {recipe_id: 4, name: 'instruction2', step_number: 2},
        {recipe_id: 5, name: 'instruction1', step_number: 1},
        {recipe_id: 5, name: 'instruction2', step_number: 2},
        {recipe_id: 6, name: 'instruction1', step_number: 1},
        {recipe_id: 6, name: 'instruction2', step_number: 2},
        {recipe_id: 7, name: 'instruction1', step_number: 1},
        {recipe_id: 7, name: 'instruction2', step_number: 2},
        {recipe_id: 8, name: 'instruction1', step_number: 1},
        {recipe_id: 8, name: 'instruction2', step_number: 2},
        {recipe_id: 9, name: 'instruction1', step_number: 1},
        {recipe_id: 9, name: 'instruction2', step_number: 2},
        
      ]);
    });
};