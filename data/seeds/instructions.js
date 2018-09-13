
exports.seed = function(knex, Promise) {
  return knex('table_name').del()
    .then(function () {
      return knex('table_name').insert([
        { recipe_id: 2, step_number: 1, step_instruction: 'Saute beef' },
        { recipe_id: 2, step_number: 2, step_instruction: 'Chop tomatoes' },
        { recipe_id: 2, step_number: 3, step_instruction: 'Add beef and tomatoes to tortillas' },
        { recipe_id: 3, step_number: 1, step_instruction: 'Preheat oven to 400 degress' },
        { recipe_id: 3, step_number: 2, step_instruction: 'Mix dry ingredients' },
        { recipe_id: 3, step_number: 3, step_instruction: 'Incorporate wet ingredients and add to cake pan' },
        { recipe_id: 3, step_number: 4, step_instruction: 'Bake for 30 minutes' },
      ]);
    });
};
