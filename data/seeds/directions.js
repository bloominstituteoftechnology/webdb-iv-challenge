exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('directions')
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex('directions').insert([
        { recipes_id: 1, name: 'Cook patty', step: 1 },
        { recipes_id: 1, name: 'Add Cheese', step: 2 },
        { recipes_id: 1, name: 'Cook Bacon', step: 3 },
        { recipes_id: 1, name: 'Place ingredients on bun', step: 4 },
        { recipes_id: 2, name: 'Cook patty', step: 1 },
        { recipes_id: 2, name: 'Add onion ring', step: 2 },
        { recipes_id: 2, name: 'Add BBQ sauce', step: 3 },
        { recipes_id: 3, name: 'Cook patty', step: 1 },
        { recipes_id: 3, name: 'Add lettuce', step: 2 },
        { recipes_id: 3, name: 'Add tomato', step: 3 },
        { recipes_id: 3, name: 'Add onion', step: 4 },
        { recipes_id: 4, name: 'Cook ravioli', step: 1 },
        { recipes_id: 4, name: 'Add marinara', step: 2 },
        { recipes_id: 5, name: 'Cook fettucine', step: 1 },
        { recipes_id: 5, name: 'Add alfredo', step: 2 },
        { recipes_id: 6, name: 'Cook ziti', step: 1 },
        { recipes_id: 6, name: 'Add ricotta', step: 2 },
        { recipes_id: 6, name: 'Add mozarella', step: 3 },
        { recipes_id: 6, name: 'Add fontina', step: 4 },
        { recipes_id: 6, name: 'Add romano', step: 6 },
        { recipes_id: 6, name: 'Add parmesan', step: 6 },
        { recipes_id: 7, name: 'Cut chicken into pieces', step: 1 },
        { recipes_id: 7, name: 'Add flour and spices together', step: 2 },
        { recipes_id: 7, name: 'Dredge chicken', step: 3 },
        { recipes_id: 7, name: 'Fry chicken', step: 4 },
        { recipes_id: 8, name: 'Cook chicken', step: 1 },
        { recipes_id: 8, name: 'Combine chicken and vegetables', step: 2 },
        { recipes_id: 8, name: 'Cover with crust and bake', step: 3 },
        { recipes_id: 9, name: 'Cook and chop chicken', step: 1 },
        {
          recipes_id: 9,
          name: 'Combine chicken with lettuce, tomato, croutons, and avodacod',
          step: 2
        },
        { recipes_id: 9, name: 'Add dressing as desired', step: 3 }
      ]);
    });
};
