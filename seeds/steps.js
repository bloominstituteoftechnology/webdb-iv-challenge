
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('steps').del()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        {step_number: 1, step: "Roll Dough", recipe_id: 1},
        {step_number: 1, step: "Spread Sauce", recipe_id: 1},
        {step_number: 1, step: "Sprinkle Cheese", recipe_id: 1},
        {step_number: 1, step: "Put in oven on 450 for 15-20 min", recipe_id: 1},
        {step_number: 1, step: "Take out and let cool", recipe_id: 1},
        {step_number: 1, step: "Mmmm Pizza", recipe_id: 1},
        {step_number: 2, step: "Cook ground beef with seasoning in pan", recipe_id: 2},
        {step_number: 2, step: "Microwave tortilla shells", recipe_id: 2},
        {step_number: 2, step: "Top tortillas with beef and cheese", recipe_id: 2},
        {step_number: 2, step: "Delicioso!", recipe_id: 2},
        {step_number: 3, step: "Lay out two slices of bread", recipe_id: 3},
        {step_number: 3, step: "Spread peanut butter on first slice", recipe_id: 3},
        {step_number: 3, step: "Spread jelly on the second", recipe_id: 3},
        {step_number: 3, step: "Put it together and EAT IT", recipe_id: 3},
      ]);
    });
};
