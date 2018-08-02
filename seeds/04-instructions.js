exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("instructions")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("instructions").insert([
        { instruction: "Roll hamburger patty", recipe_id: "3" },
        {
          instruction: "Press hamburger ball on flat top grill",
          recipe_id: "3"
        },
        { instruction: "Add 2 strips of bacon to grill", recipe_id: "3" }
      ]);
    });
};
