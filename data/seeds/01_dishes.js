exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("dishes")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("dishes").insert([
        { dish_name: "tacos" },
        { dish_name: "cookies" },
        { dish_name: "chili" }
      ]);
    });
};
