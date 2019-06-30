exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("recipes")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("recipes").insert([
        { name: "5 cheese chicken alfredo" },
        { name: "supreme pizza" },
        { name: "country fried steak and gravy" }
      ]);
    });
};
