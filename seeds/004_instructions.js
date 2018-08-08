exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("instructions")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("instructions").insert([
        { description: "Row the dow", recipe_id: 1 },
        { description: "Add Cheese", recipe_id: 1 },
        { description: "Add ketchup", recipe_id: 1 }
      ]);
    });
};
