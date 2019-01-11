
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipe_ingredient').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipe_ingredient').insert([
        // Chocolate Chip Cookie
        { recipe_id: 1, amount: 1, measurement: 'cup', ingredient_id: 1 },
        { recipe_id: 1, amount: .5, measurement: 'cup', ingredient_id: 2 },
        { recipe_id: 1, amount: 1, measurement: 'cup', ingredient_id: 3 },
        { recipe_id: 1, amount: 2, measurement: 'whole', ingredient_id: 4 },
        { recipe_id: 1, amount: 1.5, measurement: 'cup', ingredient_id: 6 },
        { recipe_id: 1, amount: 1.5, measurement: 'cup', ingredient_id: 7 },
        { recipe_id: 1, amount: .75, measurement: 'tsp', ingredient_id: 9 },
        { recipe_id: 1, amount: .75, measurement: 'tsp', ingredient_id: 10 },
        { recipe_id: 1, amount: 1, measurement: 'tsp', ingredient_id: 11 },
        { recipe_id: 1, amount: 2, measurement: 'cup', ingredient_id: 12 },
        { recipe_id: 1, amount: 1, measurement: 'cup', ingredient_id: 13 },
        // Coconut Oatmeal Chocolate Chip Cookie
        { recipe_id: 2, amount: 1, measurement: 'cup', ingredient_id: 1 },
        { recipe_id: 2, amount: .5, measurement: 'cup', ingredient_id: 2 },
        { recipe_id: 2, amount: 1, measurement: 'cup', ingredient_id: 3 },
        { recipe_id: 2, amount: 2, measurement: 'whole', ingredient_id: 4 },
        { recipe_id: 2, amount: 1, measurement: 'tsp', ingredient_id: 5 },
        { recipe_id: 2, amount: 5, measurement: 'cup', ingredient_id: 6 },
        { recipe_id: 2, amount: 2, measurement: 'cup', ingredient_id: 7 },
        { recipe_id: 2, amount: .5, measurement: 'tsp', ingredient_id: 9 },
        { recipe_id: 2, amount: .75, measurement: 'tsp', ingredient_id: 10 },
        { recipe_id: 2, amount: 1, measurement: 'tsp', ingredient_id: 11 },
        { recipe_id: 2, amount: 1.5, measurement: 'cup', ingredient_id: 12 },
        { recipe_id: 2, amount: 1, measurement: 'cup', ingredient_id: 14 },
        { recipe_id: 2, amount: 1, measurement: 'cup', ingredient_id: 15 },
        // Ciabatta Bread
        { recipe_id: 3, amount: 2.4, measurement: '', ingredient_id: 3 },
        { recipe_id: 3, amount: 2.4, measurement: '', ingredient_id: 3 },
        { recipe_id: 3, amount: 2.4, measurement: '', ingredient_id: 3 },
        { recipe_id: 3, amount: 2.4, measurement: '', ingredient_id: 3 },
        { recipe_id: 3, amount: 2.4, measurement: '', ingredient_id: 3 },
        // French Bread
        { recipe_id: 4, amount: 2.4, measurement: '', ingredient_id: 3 },
        { recipe_id: 4, amount: 2.4, measurement: '', ingredient_id: 3 },
        { recipe_id: 4, amount: 2.4, measurement: '', ingredient_id: 3 },
        { recipe_id: 4, amount: 2.4, measurement: '', ingredient_id: 3 }

      ]);
    });
};
