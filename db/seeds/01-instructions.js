exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("instructions")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("instructions").insert([
        { recipe_id: 1, step: 1, instruction: "Gather ingredients" },
        { recipe_id: 1, step: 2, instruction: "Mix ingredients" },
        { recipe_id: 1, step: 3, instruction: "Cook ingredients" },
        { recipe_id: 2, step: 1, instruction: "Gather ingredients" },
        { recipe_id: 2, step: 2, instruction: "Mix ingredients" },
        { recipe_id: 2, step: 3, instruction: "Cook ingredients" },
        { recipe_id: 3, step: 1, instruction: "Gather ingredients" },
        { recipe_id: 3, step: 2, instruction: "Mix ingredients" },
        { recipe_id: 3, step: 3, instruction: "Cook ingredients" }
      ]);
    });
};
