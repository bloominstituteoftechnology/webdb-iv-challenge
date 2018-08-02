
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {
          recipe_id: 1, 
          ingredient_list: 'salmon fillet',
          quantity: '1'
        },
        {
          recipe_id: 2, 
          ingredient_list: 'salmon fillet',
          quantity: '1'
        },
        {
          recipe_id: 3, 
          ingredient_list: 'whole chicken',
          quantity: '1'
        },
        {
          recipe_id: 4, 
          ingredient_list: 'chicken wings',
          quantity: '12'
        },
        {
          recipe_id: 5, 
          ingredient_list: 'sweet potatoes',
          quantity: '2'
        },
        {
          recipe_id: 6, 
          ingredient_list: 'sweet potatoes',
          quantity: '2'
        }
      ]);
    });
};
