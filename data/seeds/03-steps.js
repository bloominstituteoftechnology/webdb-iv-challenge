exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("steps")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("steps").insert([
        { step_number: 1, instructions: "Cook", recipe_id: 1 },
        { step_number: 2, instructions: "Admire", recipe_id: 1 },
        { step_number: 3, instructions: "Eat", recipe_id: 1 }
      ]);
    });
};
