
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        { id: 1, ingredient: 'cheese', quantity: '3', unit_of_measurement: 'ounces', recipe_id: '2' },
        { id: 2, ingredient: 'cilantro', quantity: '2', unit_of_measurement: 'ounces', recipe_id: '2' },
        { id: 3, ingredient: 'chicken', quantity: '4', unit_of_measurement: 'ounces', recipe_id: '2' },
        { id: 4, ingredient: 'tortilla', quantity: '1', unit_of_measurement: 'ounces', recipe_id: '2' },
        { id: 5, ingredient: 'onion', quantity: '2', unit_of_measurement: 'ounces', recipe_id: '2' },
      ]);
    });
};