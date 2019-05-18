
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipeSteps').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipeSteps').insert([
        {recipeID:1, stepID:1, position:2 },
        {recipeID:1, stepID: 6, position:1 },
        {recipeID:1, stepID: 9, position:3 },
        {recipeID:2, stepID:12, position:2 },
        {recipeID:2, stepID: 5, position:1 },
        {recipeID:3, stepID: 10, position:1 },
        {recipeID:3, stepID: 7, position:2 },
        {recipeID:4, stepID:1, position:3 },
        {recipeID:4, stepID: 2, position:2 },
        {recipeID:4, stepID: 3, position:1 },
        {recipeID:5, stepID:8, position:1 },
        {recipeID:5, stepID:11, position:2 },
        {recipeID:6, stepID:1, position:3 },
        {recipeID:6, stepID: 4, position:1 },
        {recipeID:6, stepID: 9, position:2 },
        {recipeID:7, stepID: 8, position:4 },
        {recipeID:7, stepID: 10, position:1 },
        {recipeID:7, stepID:1, position:3 },
        {recipeID:7, stepID: 12, position:2 },

        
      ]);
    });
};
