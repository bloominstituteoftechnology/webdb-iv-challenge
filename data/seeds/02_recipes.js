exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("recipes")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("recipes").insert([
        { recipe_name: "chocolate chip cookies", dish_id: 2 },
        { recipe_name: "peanut butter cookies", dish_id: 2 },
        { recipe_name: "chicken tacos", dish_id: 1 },
        { recipe_name: "sugar cookies", dish_id: 2 }
      ]);
    });
};
