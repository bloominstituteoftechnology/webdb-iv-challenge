
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes-ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes-ingredients').insert([
        { recipe_id: 1, ingredient_id: 1, quantity: "2 teaspoons" },
        { recipe_id: 1, ingredient_id: 2, quantity: "1 cup" },
        { recipe_id: 1, ingredient_id: 3, quantity: "3 cups" },
        { recipe_id: 1, ingredient_id: 4, quantity: "1 tablespoon" },
        { recipe_id: 3, ingredient_id: 5, quantity: "1 tablespoon" },
        { recipe_id: 1, ingredient_id: 6, quantity: "1 teaspoon" },
        { recipe_id: 1, ingredient_id: 7, quantity: "1" },
        { recipe_id: 3, ingredient_id: 8, quantity: "1 tablespoon" },
        { recipe_id: 3, ingredient_id: 9, quantity: "1 can, diced" },
        { recipe_id: 1, ingredient_id: 10, quantity: "1/2 small, chopped" },
        { recipe_id: 3, ingredient_id: 11, quantity: "1 1/4 cups" },
        { recipe_id: 1, ingredient_id: 12, quantity: "1/2 cup" },
        { recipe_id: 1, ingredient_id: 13, quantity: "1/2 cup" },
        { recipe_id: 2, ingredient_id: 2, quantity: "1 1/3 cups" },
        { recipe_id: 2, ingredient_id: 1, quantity: "2 1/4 teaspoons" },
        { recipe_id: 2, ingredient_id: 8, quantity: "1/4 cup" },
        { recipe_id: 2, ingredient_id: 14, quantity: "2 teaspoons" },
        { recipe_id: 2, ingredient_id: 6, quantity: "1 1/2 teaspoons" },
        { recipe_id: 2, ingredient_id: 15, quantity: "1/2 cup" },
        { recipe_id: 2, ingredient_id: 3, quantity: "3 3/4 cups" },
        { recipe_id: 2, ingredient_id: 16, quantity: "4 oz" },
        { recipe_id: 3, ingredient_id: 11, quantity: "8 oz" },
        { recipe_id: 3, ingredient_id: 17, quantity: "1 pound" },
        { recipe_id: 3, ingredient_id: 10, quantity: "2 oz" },
      ]);
    });
};
