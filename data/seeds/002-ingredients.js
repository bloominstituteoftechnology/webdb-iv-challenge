
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients')
  .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {ingredient: 'cheese', quantity: 1, recipe_id: 1},
        {ingredient: 'pepperoni', quantity: 10, recipe_id: 1},
        {ingredient: 'premade pizza dough', quantity: 1, recipe_id: 1},
        {ingredient: 'lettuce', quantity: 1, recipe_id: 2},
        {ingredient: 'dressing', quantity: 1, recipe_id: 2},
        {ingredient: 'fruit', quantity: 4, recipe_id: 3},
      ]);
    });
};
