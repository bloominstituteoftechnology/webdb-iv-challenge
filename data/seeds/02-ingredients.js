
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        { name: 'Salsa', quantity: '8 ounces', recipe_id: 1 },
        { name: 'Chicken', quantity: '1 pound', recipe_id: 1 },
        { name: 'Tortillas', quantity: '12 ounces', recipe_id: 1 },
        { name: 'Test Ingredient 1', quantity: '1 ounces', recipe_id: 4 },
        { name: 'Test Ingredient 2', quantity: '2 ounces', recipe_id: 4 },
        { name: 'Test Ingredient 3', quantity: '3 ounces', recipe_id: 4 },
      ]);
    });
};
