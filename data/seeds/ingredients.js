exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("ingredients")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("ingredients").insert([
        { name: "spaghetti pasta" },
        { name: "tomotao sauce" },
        { name: "cheese" },
        { name: "pizza dough" },
        { name: "perroni" },
        { name: "tortilla" },
        { name: "cilantro" },
        { name: "salsa" },
        { name: "pork" },
        { name: "mushroom" },
        { name: "fish" },
        { name: "steak" }
      ]);
    });
};
