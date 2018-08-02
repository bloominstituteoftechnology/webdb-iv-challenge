exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('ingredients').insert([
        { id: 1, name: 'cheese', recipe_id: 1, quantity: '1/2c' },
        { id: 2, name: 'sauce', recipe_id: 1, quantity: '1/4c' },
        { id: 3, name: 'tomatoes', recipe_id: 1, quantity: '1/2c' },
        { id: 4, name: 'pizza crust', recipe_id: 1, quantity: '1' },
        { id: 5, name: 'eggplants', recipe_id: 2, quantity: '1c' },
        { id: 6, name: 'cheese', recipe_id: 2, quantity: '1c' },
        { id: 7, name: 'chicken', recipe_id: 3, quantity: '1lb' },
        { id: 8, name: 'taco shell', recipe_id: 3, quantity: '6' },
        { id: 9, name: 'steak', recipe_id: 4, quantity: '1lb' },
        { id: 10, name: 'tortillas', recipe_id: 4, quantity: '6' },
        { id: 11, name: 'noodles', recipe_id: 5, quantity: '1 fistful' },
        { id: 12, name: 'sauce', recipe_id: 5, quantity: '1c' },
        { id: 13, name: 'noodles', recipe_id: 6, quantity: '1 fistful' },
        { id: 14, name: 'cream', recipe_id: 6, quantity: '2c' }
      ]);
    });
};
