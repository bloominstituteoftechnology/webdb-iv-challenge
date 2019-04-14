
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('steps').del()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        {id: 1, step_desc: 'stir', order: 1, recipe_id: 1},
        {id: 2, step_desc: 'sniff', order: 2, recipe_id: 1},
        {id: 3, step_desc: 'smash', order: 3, recipe_id: 1}
      ]);
    });
};
