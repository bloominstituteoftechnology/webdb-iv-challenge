
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('steps').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        {stepNumber: 1, recipeId: 1, description: 'cook beef'},
        {stepNumber: 2, recipeId: 1, description: 'bun the beef'},
        {stepNumber: 1, recipeId: 2, description: 'pour broth'},
        {stepNumber: 2, recipeId: 2, description: 'add flavor'},
        {stepNumber: 1, recipeId: 3, description: 'spread sauce'},
        {stepNumber: 2, recipeId: 3, description: 'spread cheese'},
        {stepNumber: 3, recipeId: 3, description: 'put in oven'},
      ]);
    });
};
