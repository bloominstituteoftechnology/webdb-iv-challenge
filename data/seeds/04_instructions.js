
exports.seed = function(knex, Promise) {
  
  return knex('instructions').truncate()
    .then(function () {
      
      return knex('instructions').insert([
        {instruction: "Sift dry ingredients together.", step: 1, recipeId: 1},
        {instruction: "Blend liquid ingredients in a bowl.", step: 2, recipeId: 1},
        {instruction: "Make well in center of dry ingredients and add mixed liquids in three batches.", step: 3, recipeId: 1},
        {instruction: "Line pans with parchment paper. Pour batter into pans.", step: 4, recipeId: 1},
        {instruction: "Cream butter and sugar together in mixing bowl.", step: 1, recipeId: 5},
        {instruction: "Spoon raspberry jam into center of each cookie.", step: 4, recipeId: 5},
        {instruction: "Bake for 10 minutes.", step: 5, recipeId: 5},
        {instruction: "Roast pork butt for 3 hours.", recipeId: 7},
        {instruction: "Cook tortillas and let cool.", recipeId: 7},
        {instruction: "Thinly slice cabbage and dice avocado.", recipeId: 7},
      ]);
    });
};
