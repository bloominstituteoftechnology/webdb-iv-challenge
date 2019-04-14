exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("instructions")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("instructions").insert([
        { recipe_id: 1, step: "Mix the dough with the flour." },
        { recipe_id: 1, step: "Make paste from the tomatoes." },
        { recipe_id: 1, step: "rowValue3" },
        { recipe_id: 1, step: "Spread the tomato paste on the dough." },
        { recipe_id: 1, step: "Put cheese on top." },
        { recipe_id: 1, step: "Put pepperoni on the cheese." },
        { recipe_id: 1, step: "Put it all in the oven." },
        { recipe_id: 1, step: "Set oven at 400 degrees for an hour." },
        { recipe_id: 1, step: "Take out of oven, let cool, then eat." },
        { recipe_id: 2, step: "Mix the dough with the flour." },
        { recipe_id: 2, step: "Make paste from the tomatoes." },
        { recipe_id: 2, step: "Spread the tomato paste on the dough." },
        { recipe_id: 2, step: "Put cheese on top." },
        { recipe_id: 2, step: "Put it all in the oven." },
        { recipe_id: 2, step: "Set oven at 400 degrees for an hour." },
        { recipe_id: 2, step: "Take out of oven, let cool, then eat." }
      ]);
    });
};
