
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipe_ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipe_ingredients').insert([

        // for cheese pizza
        {amount: '2 pounds', recipes_id: 1, ingredient_id: 1}, //cheese
        {amount: '3 cups', recipes_id: 1, ingredient_id: 2}, // pizza sause
        {amount: '1/4 pound', recipes_id: 1, ingredient_id: 3}, // pizza dough
        {amount: '2 ounces', recipes_id: 1, ingredient_id: 4}, // oil 

        // for meatlovers pizza
        {amount: '1/2 pound', recipes_id: 2, ingredient_id: 1}, //cheese
        {amount: '3 cups', recipes_id: 2, ingredient_id: 2}, //pizza sause
        {amount: '1/4 pound', recipes_id: 2, ingredient_id: 3}, // pizza dough
        {amount: '1 ounce', recipes_id: 2, ingredient_id: 4}, // oil
        {amount: '1/4 pound', recipes_id: 2, ingredient_id: 5}, // pepperoni
        {amount: '1/4 pound', recipes_id: 2, ingredient_id: 6}, // sausage
        {amount: '1/4 pound', recipes_id: 2, ingredient_id: 7}, // canadian bacon

        // for thin crust pizza
        {amount: '1/4 pound', recipes_id: 3, ingredient_id: 1}, //cheese
        {amount: '1 cup', recipes_id: 3, ingredient_id: 2}, //pizza sause
        {amount: '1/8 pound', recipes_id: 3, ingredient_id: 3}, //pizza dough
        {amount: '3 ounces', recipes_id: 3, ingredient_id: 4}, //oil
        {amount: '1/6 pound', recipes_id: 3, ingredient_id: 5}, //pepperoni

        // for cheesy tacos
        {amount: '5 pounds', recipes_id: 4, ingredient_id: 1}, //cheese
        {amount: '2 cups', recipes_id: 4, ingredient_id: 8},   //ground beef
        {amount: '1 handful', recipes_id: 4, ingredient_id: 9}, // taco shell

        // for regular tacos
        {amount: '1 pound', recipes_id: 5, ingredient_id: 1}, //cheese
        {amount: '2 cups', recipes_id: 5, ingredient_id: 8},  //ground beef
        {amount: '1 handful', recipes_id: 5, ingredient_id: 9}// taco shell


      ]);
    });
};
