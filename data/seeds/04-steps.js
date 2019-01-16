
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('steps').del()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        {steps_procedure: "Sift dry ingredients together.",
         steps_number: 1, 
         recipe_id: 1},
        {steps_procedure: "Blend liquid ingredients in a bowl.", 
         steps_number: 2,
         recipe_id: 1},
        {steps_procedure: "Make well in center of dry ingredients and add mixed liquids in three batches.",
         steps_number: 3,
          recipe_id: 1},
        {steps_procedure: "Line pans with parchment paper. Pour batter into pans.", 
        steps_number: 4, 
        recipe_id: 1},
        {steps_procedure: "Cream butter and sugar together in mixing bowl.",
         steps_number: 1, 
         recipe_id: 5},
        {steps_procedure: "Spoon raspberry jam into center of each cookie.", 
        steps_number: 4,
         recipe_id: 5},
        {steps_procedure: "Bake for 10 minutes.",
         steps_number: 5,
          recipe_id: 5},
        {steps_procedure: "Roast pork butt for 3 hours.",
        steps_number: 6,
         recipe_id: 7},
        {steps_procedure: "Cook tortillas and let cool.",
        steps_number: 7,
         recipe_id: 7},
        {steps_procedure: "Thinly slice cabbage and dice avocado.",
        steps_number: 8,
         recipe_id: 7},
      ]);
    });
};
