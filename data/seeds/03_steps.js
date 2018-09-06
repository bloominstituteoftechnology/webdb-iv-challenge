
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {step_number: 1, instruction: 'chop', recipe_id: 1},
        {step_number: 2, instruction: 'mix', recipe_id: 1},
        {step_number: 3, instruction: 'fry', recipe_id: 1},
        {step_number: 1, instruction: 'dice', recipe_id: 2},
        {step_number: 2, instruction: 'slice', recipe_id: 2},
        {step_number: 3, instruction: 'cry', recipe_id: 2},
        {step_number: 1, instruction: 'knead', recipe_id: 3},
        {step_number: 2, instruction: 'rise', recipe_id: 3},
        {step_number: 3, instruction: 'spread', recipe_id: 3},
        {step_number: 1, instruction: 'jumble', recipe_id: 4},
        {step_number: 2, instruction: 'tumble', recipe_id: 4},
        {step_number: 3, instruction: 'bumble', recipe_id: 4},
        {step_number: 1, instruction: 'wonder', recipe_id: 5},
        {step_number: 2, instruction: 'confusion', recipe_id: 5},
        {step_number: 3, instruction: 'awe', recipe_id: 5},
        {step_number: 1, instruction: 'give up', recipe_id: 6},
        {step_number: 2, instruction: 'quit', recipe_id: 6},
        {step_number: 3, instruction: 'do not bother', recipe_id: 6},
      ]);
    });
};
