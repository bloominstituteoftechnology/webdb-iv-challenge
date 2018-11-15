
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('steps')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        {step: 1, direction: 'Direction 1', recipe_id: 1},
        {step: 2, direction: 'Direction 2', recipe_id: 1},
        {step: 3, direction: 'Direction 3', recipe_id: 1},
        {step: 1, direction: 'Direction 1', recipe_id: 2},
        {step: 2, direction: 'Direction 1', recipe_id: 2},
      ]);
    });
};
