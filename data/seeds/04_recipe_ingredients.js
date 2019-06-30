exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipe_ingredients')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('recipe_ingredients').insert([
        {
          id: 1,
          ingredient_id: '1',
          recipe_id: '1',
          quantity: '3',
          measurement: 'whole',
        },
        {
          id: 2,
          ingredient_id: '2',
          recipe_id: '1',
          quantity: '1.5',
          measurement: 'cups',
        },
        {
          id: 3,
          ingredient_id: '3',
          recipe_id: '1',
          quantity: '.75',
          measurement: 'cups',
        },
      ]);
    });
};
