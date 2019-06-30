exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("dishes")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("dishes").insert([
        { name: "Pizza" },
        { name: "Tacos" },
        { name: "Salmon" }
      ]);
    });
};