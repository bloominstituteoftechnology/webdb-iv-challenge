exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("recipes")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("recipes").insert([
        { name: "Spaghetti", dish_id: 2 },
        { name: "Fish Tacos", dish_id: 3 },
        { name: "Pepperoni Pizza", dish_id: 1 },
        { name: "Al Pastor Tacos", dish_id: 3 },
        { name: "Mushroom Pizza", dish_id: 1 },
        { name: "Carne Asada Tacos", dish_id: 3 }
      ]);
    });
};
