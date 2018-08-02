exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("ingredients")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("ingredients").insert([
        { name: "Bacon", recipe_id: "3" },
        { name: "Ground Beef", recipe_id: "3" },
        { name: "Lettuice", recipe_id: "3" }
      ]);
    });
};
