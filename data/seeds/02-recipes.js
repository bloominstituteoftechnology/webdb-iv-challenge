exports.seed = function(knex, Promise) {
  return knex('recipes').truncate()
    .then(function () {
      return knex('recipes').insert([
        {recipe_name: "Martha Stewart Six Layer", dish_id: 1},
        {recipe_name: "Classic Benedict", dish_id: 2},
        {recipe_name: "Southwestern Benedict", dish_id: 2},
        {recipe_name: "Torchy's Traditional", dish_id: 4},
        {recipe_name: "Raspberry Thumbprints", dish_id: 3},
        {recipe_name: "Chocolate Drop", dish_id: 3},
        {recipe_name: "Pastor Street Taco", dish_id: 4},
    ]);
    });
};