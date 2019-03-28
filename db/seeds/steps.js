
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('steps').del()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        {id: 1, step_order: 1, step_description: 'bloom yeast', recipe_id: 1},
        {id: 2, step_order: 2, step_description: 'knead dough', recipe_id: 1},
        {id: 3, step_order: 3, step_description: 'rest dough', recipe_id: 1},
      ]);
    });
};
