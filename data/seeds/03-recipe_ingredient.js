exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("recipe_ingredient")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("recipe_ingredient").insert([
        // for checken balti
        { amount: "2 medium", recipes_id: 1, ingredient_id: 1 }, //chicken
        { amount: "100ml", recipes_id: 1, ingredient_id: 2 }, // oil
        { amount: "2 small", recipes_id: 1, ingredient_id: 3 }, // onions
        { amount: "3 medium", recipes_id: 1, ingredient_id: 4 }, // skinless tomato

        // for lamb balti
        { amount: "2 medium", recipes_id: 2, ingredient_id: 5 }, //lamb loin
        { amount: "100ml", recipes_id: 2, ingredient_id: 2 }, // oil
        { amount: "2 small", recipes_id: 2, ingredient_id: 3 }, // onions
        { amount: "3 medium", recipes_id: 2, ingredient_id: 4 }, // skinless tomato

        // for plain naan
        { amount: "3 tea spoons", recipes_id: 3, ingredient_id: 2 }, //oil
        { amount: "200 grams", recipes_id: 3, ingredient_id: 6 }, // plain flour
        { amount: "1 cup", recipes_id: 3, ingredient_id: 7 }, // water

        // for keema naan
        { amount: "3 tea spoons", recipes_id: 3, ingredient_id: 2 }, //oil
        { amount: "200 grams", recipes_id: 3, ingredient_id: 6 }, // plain flour
        { amount: "1 cup", recipes_id: 3, ingredient_id: 7 }, // water
        { amount: "100 grams", recipes_id: 3, ingredient_id: 8 } // keema (mince meat)
      ]);
    });
};
