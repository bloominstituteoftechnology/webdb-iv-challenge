exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("instructions")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("instructions").insert([
        {
          step_instructions: "mix together sugar and butter",
          sequence: 1,
          recipe_id: 1
        },
        {
          step_instructions: "put chicken and tomatoes in crock pot",
          recipe_id: 3
        },
        {
          step_instructions: "mix flour into butter/sugar mixture",
          sequence: 2,
          recipe_id: 1
        },
        {
          step_instructions: "fold in chocolate chips",
          sequence: 3,
          recipe_id: 1
        }
      ]);
    });
};
