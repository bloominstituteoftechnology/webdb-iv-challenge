exports.seed = function(knex, Promise) {
  return knex('recipe_ingredients').truncate()
    .then(() => {
      return knex('recipe_ingredients').insert([
        {recipe: 1, ingredient: 1, amount: 1, unit: 'cup'},
        {recipe: 1, ingredient: 2, amount: 0.25, unit: 'cup'},
        {recipe: 1, ingredient: 3, amount: 2, unit: 'tsp'},
        {recipe: 1, ingredient: 4, amount: 2, unit: 'Tbsp'},
        {recipe: 1, ingredient: 5, amount: 2, unit: 'Tbsp'},
        {recipe: 1, ingredient: 6, amount: 1.25, unit: 'cup'},
        {recipe: 1, ingredient: 7, amount: 0.125, unit: 'tsp'},
        {recipe: 2, ingredient: 8, amount: 2, unit: 'cup'},
        {recipe: 2, ingredient: 9, amount: 1.75, unit: 'cup'},
        {recipe: 3, ingredient: 10, amount: 0.5, unit: 'tsp'},
        {recipe: 3, ingredient: 11, amount: 1, unit: 'cracker'},
        {recipe: 4, ingredient: 12, amount: 6, unit: 'clove'},
        {recipe: 4, ingredient: 13, amount: 3, unit: 'cup'},
        {recipe: 4, ingredient: 14, amount: 0.75, unit: 'tsp'},
        {recipe: 4, ingredient: 15, amount: 2, unit: 'Tbsp'},
        {recipe: 4, ingredient: 16, amount: 0.75, unit: 'tsp'},
        {recipe: 4, ingredient: 17, amount: 0.25, unit: 'tsp'},
        {recipe: 4, ingredient: 18, amount: 0.5, unit: 'tsp'},
        {recipe: 4, ingredient: 19, amount: 0.25, unit: 'cup'},
        {recipe: 4, ingredient: 20, amount: 0.5, unit: 'lb'},
        {recipe: 5, ingredient: 19, amount: 1, unit: 'Tbsp'},
        {recipe: 5, ingredient: 21, amount: 1, unit: 'whole'},
        {recipe: 5, ingredient: 22, amount: 1, unit: '28-ounce can'},
        {recipe: 5, ingredient: 6, amount: 1, unit: 'cup'},
        {recipe: 5, ingredient: 23, amount: 1, unit: 'tsp'},
        {recipe: 5, ingredient: 24, amount: 1, unit: 'tsp'},
        {recipe: 5, ingredient: 25, amount: 1, unit: 'tsp'},
        {recipe: 5, ingredient: 26, amount: 1, unit: 'tsp'},
        {recipe: 5, ingredient: 27, amount: 0.33, unit: 'cup'}
      ]);
    });
};
