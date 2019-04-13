
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('instructions').del()
    .then(function () {
      // Inserts seed entries
      return knex('instructions').insert([
        //steps for veggie pizza
        { step: 1, recipeId: 1, stepDescription: 'do the first thing' },
        { step: 2, recipeId: 1, stepDescription: 'do the second thing' },
        { step: 3, recipeId: 1, stepDescription: 'do the third and last thing' },

        //steps for meat pizza
        { step: 1, recipeId: 2, stepDescription: 'do the first thing' },
        { step: 2, recipeId: 2, stepDescription: 'do the second thing' },
        { step: 3, recipeId: 2, stepDescription: 'do the third and last thing' },

        //steps for veggie soup
        { step: 1, recipeId: 3, stepDescription: 'do the first thing' },
        { step: 2, recipeId: 3, stepDescription: 'do the second thing' },
        { step: 3, recipeId: 3, stepDescription: 'do the third and last thing' },

        //steps for meat soup
        { step: 1, recipeId: 4, stepDescription: 'do the first thing' },
        { step: 2, recipeId: 4, stepDescription: 'do the second thing' },
        { step: 3, recipeId: 4, stepDescription: 'do the third and last thing' },

        //steps for veggie burger
        { step: 1, recipeId: 5, stepDescription: 'do the first thing' },
        { step: 2, recipeId: 5, stepDescription: 'do the second thing' },
        { step: 3, recipeId: 5, stepDescription: 'do the third and last thing' },

        //steps for meat burger
        { step: 1, recipeId: 6, stepDescription: 'do the first thing' },
        { step: 2, recipeId: 6, stepDescription: 'do the second thing' },
        { step: 3, recipeId: 6, stepDescription: 'do the third and last thing' },
      ]);
    });
};
