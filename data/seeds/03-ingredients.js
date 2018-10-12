exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("ingredients")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("ingredients").insert([
        { ingredient: "tortillas" },
        { ingredient: "shrimp" },
        { ingredient: "marinara sauce" },
        { ingredient: "cheese" },
        { ingredient: "mushrooms" },
        { ingredient: "chicken" },
        { ingredient: "carrots" }
      ]);
    });
};
