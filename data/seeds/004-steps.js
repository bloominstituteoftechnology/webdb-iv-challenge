
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('steps').del()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        {step: 'put pizza in oven', sequence: 1, recipe_id: 1},
        {step: 'drizzle dressing', sequence: 2, recipe_id: 2},
        {step: 'chop lettuce', sequence: 1, recipe_id: 2},
        {step: 'blend fruit together', sequence: 1, recipe_id: 3},
      ]);
    });
};
