
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('instructions').del()
    .then(function () {
      // Inserts seed entries
      return knex('instructions').insert([
        {id: 1, description: 'Add and stire', quantity: 2, ingredient_id: 3, step: 1, recipe_id: 1},
        {id: 2, description: 'Add', quantity: 2, ingredient_id: 5, step: 2, recipe_id: 1},
        {id: 3, description: 'mix', quantity: 2, ingredient_id: 3, step: 3, recipe_id: 1},
        {id: 4, description: 'Hammer', quantity: 1, ingredient_id: 2, step: 1, recipe_id: 2},
       
      ]);
    });
};
