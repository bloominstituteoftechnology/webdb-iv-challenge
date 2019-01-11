exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("ingredients")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("ingredients").insert([
        { ingredient_name: "stick of butter", amount: 1.5, recipe_id: 1 },
        { ingredient_name: "cup of flour", amount: 2.0, recipe_id: 1 },
        {
          ingredient_name: "bag of chocolate chips",
          amount: 0.5,
          recipe_id: 1
        },
        { ingredient_name: "tsp of vanilla", amount: 1.0, recipe_id: 1 },
        { ingredient_name: "lb chicken breasts", amount: 2.0, recipe_id: 3 },
        { ingredient_name: "can of diced tomatoes", amount: 1.0, recipe_id: 3 }
      ]);
    });
};
