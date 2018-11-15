
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('steps')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        { step: 'cook beef', order: 1, recipeId: 1, ingredientId: 1 },
        { step: 'cook pizza', order: 1, recipeId: 2, ingredientId: 5 }
      ]);
    });
};
