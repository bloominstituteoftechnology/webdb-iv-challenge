exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("recipes")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("recipes").insert([
        { recipe_name: "California", dish_id: 1 },
        { recipe_name: "Benedict", dish_id: 3 },
        { recipe_name: "Pilaf", dish_id: 2 },
        { recipe_name: "Hawaiian", dish_id: 1 },
        { recipe_name: "Omellete", dish_id: 2 }
      ]);
    });
};
