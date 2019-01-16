
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {name: "Martha Stewart Six Layer", dish_id: 1},
        {name: "Classic Benedict", dish_id: 2},
        {name: "Southwestern Benedict", dish_id: 2},
        {name: "Torchy's Traditional", dish_id: 4},
        {name: "Raspberry Thumbprints", dish_id: 3},
        {name: "Chocolate Drop", dish_id: 3},
        {name: "Pastor Street Taco", dish_id: 4},
      ]);
    });
};
