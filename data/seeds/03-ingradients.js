
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {name: "Flour", amount: 8.5, measurement: "cups", recipe_id: 1},
        {name: "Cocoa Powder", amount: 1.5, measurement: "cups", recipe_id: 1},
        {name: "Butter", amount: 6, measurement: "tbsp", recipe_id: 2},
        {name: "Eggs", amount: 4, measurement: "4", recipe_id: 2},
        {name: "Flour Tortillas", amount: 10, recipe_id: 4},
        {name: "Butter", amount: 1, measurement: "stick", recipe_id: 5},
        {name: "Raspberry Jam", amount: 1.25, measurement: "cups", recipe_id: 5},
        {name: "Chocolate Chips", amount: 2, measurement: "cups", recipe_id: 6},
        {name: "Pork Butt", amount: 4, measurement: "lbs", recipe_id: 7},
        {name: "Cabbage", amount: 1, recipe_id: 7},
        {name: "Paprika", amount: 2, measurement: "tsp", recipe_id: 3},

      ]);
    });
};
