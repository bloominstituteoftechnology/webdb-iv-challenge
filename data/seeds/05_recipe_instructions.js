exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipe_instructions')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('recipe_instructions').insert([
        { recipe_id: 1, step: 1, description: 'turn on the oven' },
        { recipe_id: 1, step: 2, description: 'put the stuff on the pizza' },
        { recipe_id: 1, step: 3, description: 'put the pizza in the oven' },
        { recipe_id: 2, step: 1, description: 'put the stuff in a mug' },
        { recipe_id: 2, step: 2, description: 'microwave the mug' },
        { recipe_id: 3, step: 1, description: 'cook the carnitas' },
        { recipe_id: 3, step: 2, description: 'chop the veggies' },
        { recipe_id: 3, step: 3, description: 'put together the tacos' },
        { recipe_id: 4, step: 1, description: 'make the chicken' },
        { recipe_id: 4, step: 2, description: 'make the salsa' },
        { recipe_id: 4, step: 3, description: 'put it in taco form' },
      ]);
    });
};
