
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('steps').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        //bbq pizza
        {id: 1, step_name: 'defost pizza dough', step_number: 1, recipe_id: 5},
        {id: 2, step_name: 'cook chicken', step_number: 2, recipe_id: 5},
        {id: 3, step_name: 'cut red onions', step_number: 3, recipe_id: 5},
        {id: 4, step_name: 'spread bbq sauce on dough', step_number: 4, recipe_id: 5},
        //bbq pizza
        {id: 5, step_name: 'add chicken', step_number: 5, recipe_id: 5},
        {id: 6, step_name: 'add onions', step_number: 5, recipe_id: 5},
        {id: 7, step_name: 'bake', step_number: 6, recipe_id: 5},
      ]);
    });
};
