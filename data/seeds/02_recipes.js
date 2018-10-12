exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("recipes")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("recipes").insert([
        { name: "Sugar Cookie Mug Cake", dish_id: 1 },
        { name: "French Toast in a Mug", dish_id: 2 },
        { name: "Skinny Banana Bread Mug Cake", dish_id: 3 }
      ]);
    });
};
