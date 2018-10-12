exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('instructions')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('instructions').insert([
        {
          id: 1,
          step: 'beat eggs',
          step_number: '1',
          recipe_id: '1',
        },
        {
          id: 2,
          step: 'mix in flour with eggs',
          step_number: '2',
          recipe_id: '1',
        },
        {
          id: 3,
          step: 'add milk',
          step_number: '3',
          recipe_id: '1',
        },
      ]);
    });
};
