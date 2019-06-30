exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("recipes")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("recipes").insert([
        { name: "Shrimp Tacos", dish_id: 1 },
        { name: "Tofu Tacos", dish_id: 1 },
        { name: "Supreme Pizza", dish_id: 2 },
        { name: "Deep Dish Pizza", dish_id: 2 },
        { name: "Chicken Noodle Soup", dish_id: 3 },
        { name: "Vegetable Soup", dish_id: 3 }
      ]);
    });
};
