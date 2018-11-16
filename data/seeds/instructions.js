
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('instructions').del()
    .then(function () {
      // Inserts seed entries
      return knex('instructions').insert([
        {id: 1, step: 'roll out dough', step_number: 1, recipe_id: 1},
        {id: 2, step: 'add sauce', step_number: 2, recipe_id: 1},
        {id: 3, step: 'add cheese', step_number: 3, recipe_id: 1},

        {id: 4, step: 'get bread', step_number: 1, recipe_id: 2},
        {id: 5, step: 'add peanut butter', step_number: 2, recipe_id: 2},
        {id: 6, step: 'add jelly', step_number: 3, recipe_id: 2},

        {id: 7, step: 'get pasta', step_number: 1, recipe_id: 3},
        {id: 8, step: 'boil pasta', step_number: 2, recipe_id: 3},
        {id: 9, step: 'add meat', step_number: 3, recipe_id: 3},
        {id: 10, step: 'add cheese', step_number: 4, recipe_id: 3},
      ]);
    });
};
