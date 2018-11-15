exports.seed = knex =>
  knex("recipes_ingredients")
    .truncate()
    .then(() =>
      knex("recipes_ingredients").insert([
        { recipe_id: 1, ingredient_id: 1, quantity: 598.6 },
        { recipe_id: 1, ingredient_id: 2, quantity: 979.4 },
        { recipe_id: 1, ingredient_id: 3, quantity: 41.8 },
        { recipe_id: 1, ingredient_id: 4, quantity: 528.7 },
        { recipe_id: 1, ingredient_id: 5, quantity: 939.2 }
      ])
    );
