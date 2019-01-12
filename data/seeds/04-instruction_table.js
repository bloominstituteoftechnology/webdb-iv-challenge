exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('instructions')
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex('instructions').insert([
        {
          recipe_id: '1',
          step_number: '1',
          step_description: 'Brown the taco meat'
        },
        {
          recipe_id: '1',
          step_number: '2',
          step_description: 'Add taco seasoning to cooked taco meat'
        },
        {
          recipe_id: '2',
          step_number: '1',
          step_description: 'Cook noodles in boiling water'
        },
        {
          recipe_id: '2',
          step_number: '2',
          step_description: 'Cook chicken breast'
        },
        {
          recipe_id: '3',
          step_number: '1',
          step_description: 'Form burger patties'
        },
        {
          recipe_id: '3',
          step_number: '2',
          step_description: 'Cook burger patties on the grill'
        }
      ]);
    });
};
