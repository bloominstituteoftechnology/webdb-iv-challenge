exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('instructions')
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex('instructions').insert([
        {step_number: 1, step: 'prep ingredients', recipe_id: 1},
        {step_number: 2, step: 'cook food', recipe_id: 1},
        {step_number: 1, step: 'cook food', recipe_id: 2},
      ]);
    });
};
