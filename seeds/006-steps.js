
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('steps').del()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        {recipe_id: 1, instructions_id: 1, step_number: 1},
        {recipe_id: 1, instructions_id: 2, step_number: 2},
        {recipe_id: 1, instructions_id: 3, step_number: 3},
        {recipe_id: 2, instructions_id: 1, step_number: 1},
        {recipe_id: 2, instructions_id: 2, step_number: 2},
        {recipe_id: 2, instructions_id: 4, step_number: 3},
        {recipe_id: 2, instructions_id: 3, step_number: 4},
        {recipe_id: 3, instructions_id: 1, step_number: 1},
        {recipe_id: 3, instructions_id: 2, step_number: 2},
        {recipe_id: 3, instructions_id: 3, step_number: 3},
        {recipe_id: 3, instructions_id: 5, step_number: 4},
        {recipe_id: 4, instructions_id: 6, step_number: 1},
        {recipe_id: 5, instructions_id: 1, step_number: 1},
        {recipe_id: 5, instructions_id: 7, step_number: 2},
        {recipe_id: 5, instructions_id: 5, step_number: 3}

      ]);
    });
};
