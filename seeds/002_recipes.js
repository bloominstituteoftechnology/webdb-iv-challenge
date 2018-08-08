exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("recipes")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("recipes").insert([
        { recipe_name: "Grandma Recipe", dish_id: 1, ingredient_id: 1 },
        { recipe_name: "Father Recipe", dish_id: 2, ingredient_id: 1 },
        { recipe_name: "Mother Recipe", dish_id: 1, ingredient_id: 2 }
      ]);
    });
};
