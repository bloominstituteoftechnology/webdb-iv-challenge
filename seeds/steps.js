exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('steps')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('steps').insert([
        {
          id: 1,
          description: 'Put the sauce on the pizza',
          recipe_id: 1,
          step_number: 1
        },
        {
          id: 2,
          description: 'Put the cheese on the pizza',
          recipe_id: 1,
          step_number: 2
        },
        {
          id: 3,
          description: 'Put the pizza in the oven for 20 minutes',
          recipe_id: 1,
          step_number: 3
        },
        {
          id: 4,
          description: 'Put the eggplant on the pizza',
          recipe_id: 2,
          step_number: 1
        },
        {
          id: 5,
          description: 'Put the cheese on the pizza',
          recipe_id: 2,
          step_number: 2
        },
        {
          id: 6,
          description: 'Put the pizza in the oven for 20 minutes',
          recipe_id: 2,
          step_number: 3
        },
        {
          id: 7,
          description: 'Cook the chicken',
          recipe_id: 3,
          step_number: 1
        },
        {
          id: 8,
          description: 'Warm the taco shell',
          recipe_id: 3,
          step_number: 2
        },
        {
          id: 9,
          description: 'Put the chicken in the taco shell',
          recipe_id: 3,
          step_number: 3
        },
        { id: 10, description: 'Cook the steak', recipe_id: 4, step_number: 1 },
        {
          id: 11,
          description: 'Put the tortillas on the stove',
          recipe_id: 4,
          step_number: 2
        },
        {
          id: 12,
          description: 'Put the steak in the tortillas',
          recipe_id: 4,
          step_number: 3
        },
        {
          id: 13,
          description: 'Cook the noodles',
          recipe_id: 5,
          step_number: 1
        },
        { id: 14, description: 'Heat the sauce', recipe_id: 5, step_number: 2 },
        {
          id: 15,
          description: 'Combine the noodles and the sauce together',
          recipe_id: 5,
          step_number: 3
        },
        {
          id: 16,
          description: 'Cook the noodles',
          recipe_id: 6,
          step_number: 1
        },
        {
          id: 17,
          description: 'Heat the heavy cream for like 20 minutes',
          recipe_id: 6,
          step_number: 2
        },
        {
          id: 18,
          description: 'Pour heavy cream over drained noodles',
          recipe_id: 6,
          step_number: 3
        }
      ]);
    });
};
