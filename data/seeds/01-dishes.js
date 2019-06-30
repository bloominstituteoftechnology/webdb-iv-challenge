exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("dishes")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("dishes").insert([
        { name: "Grilled Chicken Alfredo" },
        { name: "Pizza" },
        { name: "Steak" }
      ]);
    });
};
