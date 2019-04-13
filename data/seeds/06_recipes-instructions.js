exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("recipes_instructions")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("recipes_instructions").insert([
        { recipe_id: 1, instruction_id: 1, step: 1 },
        { recipe_id: 1, instruction_id: 2, step: 2 },
        { recipe_id: 1, instruction_id: 3, step: 3 },
        { recipe_id: 1, instruction_id: 4, step: 4 },
        { recipe_id: 1, instruction_id: 5, step: 5 },
        { recipe_id: 1, instruction_id: 6, step: 6 },
        { recipe_id: 1, instruction_id: 7, step: 7 },
        { recipe_id: 2, instruction_id: 1, step: 1 },
        { recipe_id: 2, instruction_id: 2, step: 2 },
        { recipe_id: 2, instruction_id: 3, step: 3 },
        { recipe_id: 2, instruction_id: 4, step: 4 },
        { recipe_id: 2, instruction_id: 5, step: 5 },
        { recipe_id: 2, instruction_id: 6, step: 6 },
        { recipe_id: 2, instruction_id: 7, step: 7 },
        { recipe_id: 3, instruction_id: 8, step: 1 },
        { recipe_id: 3, instruction_id: 4, step: 2 },
        { recipe_id: 3, instruction_id: 9, step: 3 },
        { recipe_id: 3, instruction_id: 10, step: 4 },
        { recipe_id: 3, instruction_id: 11, step: 5 },
        { recipe_id: 3, instruction_id: 12, step: 6 },
        { recipe_id: 3, instruction_id: 13, step: 7 },
        { recipe_id: 3, instruction_id: 14, step: 8 },
        { recipe_id: 4, instruction_id: 8, step: 1 },
        { recipe_id: 3, instruction_id: 4, step: 2 },
        { recipe_id: 4, instruction_id: 9, step: 3 },
        { recipe_id: 4, instruction_id: 11, step: 4 },
        { recipe_id: 4, instruction_id: 12, step: 5 },
        { recipe_id: 4, instruction_id: 16, step: 6 },
        { recipe_id: 4, instruction_id: 17, step: 7 }
      ]);
    });
};
