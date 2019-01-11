
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('steps').del()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        { id: 1, step: 'heat up tortilla', step_number: '1', ingredient_id: '4', recipe_id: '2' },
        { id: 2, step: 'add chicken', step_number: '2', ingredient_id: '3', recipe_id: '2' },
        { id: 3, step: 'add cheese', step_number: '3', ingredient_id: '1', recipe_id: '2' },
        { id: 4, step: 'add onion', step_number: '4', ingredient_id: '5', recipe_id: '2' },
        { id: 5, step: 'add cilantro', step_number: '5', ingredient_id: '2', recipe_id: '2' }
      ]);
    });
};
