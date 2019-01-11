
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('steps').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        {recipe_id: 1, step_number: '1', step_content: 'Preheat for Ribs'},
        {recipe_id: 1, step_number: '2', step_content: 'Cook Ribs'},
        {recipe_id: 1, step_number: '3', step_content: 'Eat Ribs'},
        {recipe_id: 2, step_number: '1', step_content: 'Preheat for Pulled Chicken'},
        {recipe_id: 2, step_number: '2', step_content: 'Cook Pulled Chicken'},
        {recipe_id: 2, step_number: '3', step_content: 'Eat Pulled Chicken'},
        {recipe_id: 3, step_number: '1', step_content: 'Preheat for Sesame Chicken'},
        {recipe_id: 3, step_number: '2', step_content: 'Cook Sesame Chicken'},
        {recipe_id: 3, step_number: '3', step_content: 'Eat Sesame Chicken'},
      ]);
    });
};
