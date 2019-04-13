
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('steps').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        {id: 1, recipe_step : 'Put that stuff in there', step_order: 1},
        {id: 2, recipe_step : 'Whisk it bro', step_order: 2}
       
      ]);
    });
};
