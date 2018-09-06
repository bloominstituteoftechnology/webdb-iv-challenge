
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('instructions').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('instructions').insert([
        {instruction: 'Boil water and place noodles in with splash of olive oil until al dente', recipe_id: 1, step_number: 1},
        {instruction: 'Dilute tomato sauce per instructions and heat', recipe_id: 1, step_number: 2},
        {instruction: 'Add tomatoes and onions to sauce', recipe_id: 1, step_number: 3},
        {instruction: 'Add meatballs to sauce', recipe_id: 1, step_number: 4},
        {instruction: 'Serve sauce over noodles while hot', recipe_id: 1, step_number: 5},
        {instruction: 'Cook meat in skillet adding taco seasoning', recipe_id: 2, step_number: 1},
        {instruction: 'Place meat, lettuce, tomatoes, onions, and cheese in taco shells', recipe_id: 2, step_number: 2},
        {instruction: 'Add sauces of your choosing', recipe_id: 2, step_number: 3}
      ]);
    });
};
