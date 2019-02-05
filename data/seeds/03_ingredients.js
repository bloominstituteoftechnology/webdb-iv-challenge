
exports.seed = function(knex, Promise) {
  
  return knex('ingredients').truncate()
    .then(function () {
      
      return knex('ingredients').insert([
        {ingredientName: "Flour", amount: 8.5, measurement: "cups", recipeId: 1},
        {ingredientName: "Cocoa Powder", amount: 1.5, measurement: "cups", recipeId: 1},
        {ingredientName: "Butter", amount: 6, measurement: "tbsp", recipeId: 2},
        {ingredientName: "Eggs", amount: 4, measurement: "", recipeId: 2},
        {ingredientName: "Flour Tortillas", amount: 10, recipeId: 4},
        {ingredientName: "Butter", amount: 1, measurement: "stick", recipeId: 5},
        {ingredientName: "Raspberry Jam", amount: 1.25, measurement: "cups", recipeId: 5},
        {ingredientName: "Chocolate Chips", amount: 2, measurement: "cups", recipeId: 6},
        {ingredientName: "Pork Butt", amount: 4, measurement: "lbs", recipeId: 7},
        {ingredientName: "Cabbage", amount: 1, recipeId: 7},
        {ingredientName: "Paprika", amount: 2, measurement: "tsp", recipeId: 3},
      ]);
    });
};
