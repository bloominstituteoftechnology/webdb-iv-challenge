
exports.seed = function(knex, Promise) {
  return knex('instructions').truncate()
    .then(function () {
      return knex('instructions').insert([
        {instructions: "Sift dry ingredients together.", order: 1, recipe_id: 1},
        {instructions: "Blend liquid ingredients in a bowl.", order: 2, recipe_id: 1},
        {instructions: "Make well in center of dry ingredients and add mixed liquids in three batches.", order: 3, recipe_id: 1},
        {instructions: "Line pans with parchment paper. Pour batter into pans.", order: 4, recipe_id: 1},
        {instructions: "Cream butter and sugar together in mixing bowl.", order: 1, recipe_id: 5},
        {instructions: "Spoon raspberry jam into center of each cookie.", order: 4, recipe_id: 5},
        {instructions: "Bake for 10 minutes.", order: 5, recipe_id: 5},
        {instructions: "Roast pork butt for 3 hours.", recipe_id: 7},
        {instructions: "Cook tortillas and let cool.", recipe_id: 7},
        {instructions: "Thinly slice cabbage and dice avocado.", recipe_id: 7},
    ]);
    });
};
