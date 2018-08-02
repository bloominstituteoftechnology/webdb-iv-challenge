
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('Instruction').del()
    .then(function () {
      // Inserts seed entries
      return knex('Instruction').insert([
        {recipe_id: 1, step_number: 1, description: 'crack 3 eggs'},
        {recipe_id: 1, step_number: 2, description: 'put 1 tbsp olive oil in a hot pan'},
        {recipe_id: 1, step_number: 3, description: 'cook for 5 minutes'},
        {recipe_id: 1, step_number: 4, description: 'spray some salt and pepper on eggs'},
        {recipe_id: 1, step_number: 5, description: 'put on plate and serve'},
        {recipe_id: 2, step_number: 1, description: 'chop salary'},
        {recipe_id: 2, step_number: 2, description: 'chop carrot'},
        {recipe_id: 2, step_number: 3, description: 'cut chicken breast into 1 inch pieces'},
        {recipe_id: 2, step_number: 4, description: 'put everything in a pot with boiling water'},
        {recipe_id: 2, step_number: 5, description: 'cook for 15 minutes'},
        {recipe_id: 2, step_number: 6, description: 'season with salt and peper'},
        {recipe_id: 2, step_number: 7, description: 'serve in a bowl'},
      ]);
    });
};
