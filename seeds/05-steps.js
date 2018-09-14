
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('steps').del()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        {id: 1, step_order: 1, description: 'Take telephone.', recipe_id: 1},
        {id: 2, step_order: 2, description: 'Call Dominos.', recipe_id: 1},
        {id: 3, step_order: 3, description: 'Tell them you want a pepperoni pizza.', recipe_id: 1},
        {id: 4, step_order: 4, description: 'Give them any information they ask.', recipe_id: 1},
        {id: 5, step_order: 5, description: 'Wait for delivery.', recipe_id: 1},
        {id: 6, step_order: 6, description: 'Bon Appétit.', recipe_id: 1},
        {id: 7, step_order: 1, description: 'Walk or drive to an In-n-Out.', recipe_id: 2},
        {id: 8, step_order: 2, description: 'Buy hamburger.', recipe_id: 2},
        {id: 9, step_order: 3, description: 'Bon Appétit.', recipe_id: 2}
      ]);
    });
};
