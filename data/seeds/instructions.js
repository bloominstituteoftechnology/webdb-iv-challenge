
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('instructions').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('instructions').insert([
        // steps for Veggie Pizza
        { step: 1, recipeId: 1, stepDescription: 'do thing 1' }, 
        { step: 2, recipeId: 1, stepDescription: 'do thing 2' },
        { step: 3, recipeId: 1, stepDescription: 'do thing 3' },
        // steps for Meat Pizza
        { step: 1, recipeId: 2, stepDescription: 'do thing 1' }, 
        { step: 2, recipeId: 2, stepDescription: 'do thing 2' },
        { step: 3, recipeId: 2, stepDescription: 'do thing 3' },
        // steps for Meat Sandwich
        { step: 1, recipeId: 3, stepDescription: 'do thing 1' }, 
        { step: 2, recipeId: 3, stepDescription: 'do thing 2' },
        { step: 3, recipeId: 3, stepDescription: 'do thing 3' },
        // steps for Meat Spaghetti
        { step: 1, recipeId: 4, stepDescription: 'do thing 1' }, 
        { step: 2, recipeId: 4, stepDescription: 'do thing 2' },
        { step: 3, recipeId: 4, stepDescription: 'do thing 3' },
        // steps for Veggie Spaghetti
        { step: 1, recipeId: 5, stepDescription: 'do thing 1' }, 
        { step: 2, recipeId: 5, stepDescription: 'do thing 2' },
        { step: 3, recipeId: 5, stepDescription: 'do thing 3' }
        
      ]);
    });
};
