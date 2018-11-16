
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('steps').del()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        {id: 1, recipe_id: 1, order: 1, step_text: 'combine all dry ingredients'},
        {id: 2, recipe_id: 1, order: 2, step_text: 'bake for 30 mins at 450F'}
      ]);
    });
};
