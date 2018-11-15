
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {id: 1, name: 'tortilla', recipeId: 1, quantity: 2, unit: 'ea'},
        {id: 2, name: 'pork belly', recipeId: 1, quantity: 2, unit: 'oz'},
        {id: 3, name: 'noodlez', recipeId: 2, quantity: 3, unit: 'oz'},
        {id: 4, name: 'chips', recipeId: 3, quantity: 2, unit: 'lb'},
        {id: 5, name: 'chilli cheese sauce', recipeId: 3, quantity: 2, unit: 'lb'},
      ]);
    });
};