
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('instructions').del()
    .then(function () {
      // Inserts seed entries
      return knex('instructions').insert([
        {step: 'step 1', recipeId: 1},
        {step: 'step 2', recipeId: 1},
        {step: 'step 3', recipeId: 1},
        {step: 'step 1', recipeId: 2},
        {step: 'step 2', recipeId: 2},
        {step: 'step 3', recipeId: 2},
        {step: 'step 1', recipeId: 3},
        {step: 'step 2', recipeId: 3},
        {step: 'step 3', recipeId: 3}
      ]);
    });
};
