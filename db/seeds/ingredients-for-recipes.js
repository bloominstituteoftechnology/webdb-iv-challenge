exports.seed = (knex, Promise) => {
  return knex('ingredients-for-recipes').truncate()
    .then(() => {
      return knex('ingredients-for-recipes').insert([
        { quantity: 1, recipe_id: 4, ingredient_id: 1 },
        { quantity: 1, recipe_id: 4, ingredient_id: 3 },
        { quantity: 1, recipe_id: 4, ingredient_id: 7 },
        { quantity: 1, recipe_id: 5, ingredient_id: 5 },
        { quantity: 1, recipe_id: 5, ingredient_id: 3 },
        { quantity: 3, recipe_id: 6, ingredient_id: 4 },
        { quantity: 2, recipe_id: 7, ingredient_id: 4 },
        { quantity: 2, recipe_id: 8, ingredient_id: 4 },
        { quantity: 4, recipe_id: 9, ingredient_id: 4 }
      ]);
    });
};
