exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("recipes")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("recipes").insert([
        { name: "Pepperoni Pizza", dish_id: 1 },
        { name: "Chicken Tacos", dish_id: 2 },
        { name: "Chocolate Brownies", dish_id: 3 }
      ]);
    });
};