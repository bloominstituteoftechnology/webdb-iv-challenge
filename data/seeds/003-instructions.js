exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('instructions')
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex('instructions').insert([
        {
          step_order: '1',
          step: 'Cook 15 oz of real meat to taste',
          ingredient_id: '2',
          ingredient_amount: '15',
          recipe_id: '1',
        },
        {
          step_order: '2',
          step: 'Add 1 slice of king cheese',
          ingredient_id: '6',
          ingredient_amount: '1',
          recipe_id: '1',
        },
        {
          step_order: '3',
          step: 'Add 29 tbsp of the sauce',
          ingredient_id: '4',
          ingredient_amount: '29',
          recipe_id: '1',
        },
        {
          step_order: '4',
          step: 'place meat, cheese and sauce stack between 2 actual buns',
          ingredient_id: '5',
          ingredient_amount: '2',
          recipe_id: '1',
        },
        {
          step_order: '1',
          step: 'Age real meat until old',
          ingredient_id: '2',
          ingredient_amount: '',
          recipe_id: '2',
        },
        {
          step_order: '2',
          step: 'Cook 15 oz of real meat to taste',
          ingredient_id: '2',
          ingredient_amount: '15',
          recipe_id: '2',
        },
        {
          step_order: '3',
          step: 'Add 1 slice of king cheese',
          ingredient_id: '6',
          ingredient_amount: '1',
          recipe_id: '2',
        },
        {
          step_order: '4',
          step: 'Add 29 tbsp of the sauce',
          ingredient_id: '4',
          ingredient_amount: '29',
          recipe_id: '2',
        },
        {
          step_order: '5',
          step: 'place meat, cheese and sauce stack between 2 actual buns',
          ingredient_id: '5',
          ingredient_amount: '2',
          recipe_id: '2',
        },
        {
          step_order: '1',
          step: '2 cups of milk in glass',
          ingredient_id: '3',
          ingredient_amount: '2',
          recipe_id: '3',
        },
      ]);
    });
};
