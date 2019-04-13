
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('steps').del()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        {id: 1, step: 'pour beans into bowl', ingredient_id: 1, recipe_id: 1},
        {id: 2, step: 'mix flour', ingredient_id: 3, recipe_id: 2},
        {id: 3, step: 'grate cheese', ingredient_id: 2, recipe_id: 1}
      ]);
    });
};
