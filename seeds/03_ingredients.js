
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {
          recipe_id: 7, 
          ingredient: 'salmon fillet',
          quantity: '1'
        },
        {
          recipe_id: 8, 
          ingredient: 'salmon fillet',
          quantity: '1'
        },
        {
          recipe_id: 9, 
          ingredient: 'whole chicken',
          quantity: '1'
        },
        {
          recipe_id: 10, 
          ingredient: 'chicken wings',
          quantity: '12'
        },
        {
          recipe_id: 11, 
          ingredient: 'sweet potatoes',
          quantity: '2'
        },
        {
          recipe_id: 12, 
          ingredient: 'sweet potatoes',
          quantity: '2'
        }
      ]);
    });
};
