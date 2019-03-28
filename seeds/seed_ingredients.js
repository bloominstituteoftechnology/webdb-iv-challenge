exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients')
    .del()
    .then(() => knex('ingredients').insert([
      {
        id: 1, name: 'dough', recipeId: 3, quantity: 2, unit: 'lb',
      },
      {
        id: 2, name: 'sauce', recipeId: 3, quantity: 3, unit: 'quart',
      },
      {
        id: 3, name: 'marshmallow', recipeId: 3, quantity: 80, unit: 'unit',
      },
      {
        id: 4, name: 'taco shell', recipeId: 1, quantity: 12, unit: 'unit',
      },
      {
        id: 5, name: 'taco shell', recipeId: 2, quantity: 8, unit: 'unit',
      },
      {
        id: 6, name: 'zest ball', recipeId: 1, quantity: 1, unit: 'ball',
      },
      {
        id: 7, name: 'ketchup', recipeId: 2, quantity: 3, unit: 'packet',
      },
    ]));
};