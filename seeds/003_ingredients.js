exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("ingredients")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("ingredients").insert([
        { name: "sugar" },
        { name: "flour" },
        { name: "lasagna" },
        { name: "cream cheese" },
        { name: "dough" },
        { name: "topings" },
        { name: "frying oil" }
      ]);
    });
};
