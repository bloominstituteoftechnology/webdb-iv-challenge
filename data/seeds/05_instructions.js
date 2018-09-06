
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('instructions').del()
    .then(function () {
      // Inserts seed entries
      return knex('instructions').insert([
        {order: 1, instruction: 'Step 1', recipe_id: 1},
        {order: 2, instruction: 'Step 2', recipe_id: 1},
        {order: 3, instruction: 'Step 3', recipe_id: 1},
        {order: 1, instruction: 'Step 1', recipe_id: 2},
        {order: 2, instruction: 'Step 2', recipe_id: 2},
        {order: 3, instruction: 'Step 3', recipe_id: 2},
        {order: 1, instruction: 'Step 1', recipe_id: 3},
        {order: 2, instruction: 'Step 2', recipe_id: 3},
        {order: 3, instruction: 'Step 3', recipe_id: 3},
        {order: 1, instruction: 'Step 1', recipe_id: 4},
        {order: 2, instruction: 'Step 2', recipe_id: 4},
        {order: 3, instruction: 'Step 3', recipe_id: 4},
        {order: 1, instruction: 'Step 1', recipe_id: 5},
        {order: 2, instruction: 'Step 2', recipe_id: 5},
        {order: 3, instruction: 'Step 3', recipe_id: 5},
        {order: 1, instruction: 'Step 1', recipe_id: 6},
        {order: 2, instruction: 'Step 2', recipe_id: 6},
        {order: 3, instruction: 'Step 3', recipe_id: 6},
        {order: 1, instruction: 'Step 1', recipe_id: 7},
        {order: 2, instruction: 'Step 2', recipe_id: 7},
        {order: 3, instruction: 'Step 3', recipe_id: 7},
        {order: 1, instruction: 'Step 1', recipe_id: 8},
        {order: 2, instruction: 'Step 2', recipe_id: 8},
        {order: 3, instruction: 'Step 3', recipe_id: 8},
        {order: 1, instruction: 'Step 1', recipe_id: 9},
        {order: 2, instruction: 'Step 2', recipe_id: 9},
        {order: 3, instruction: 'Step 3', recipe_id: 9}
      ]);
    });
};
