
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('steps').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        {description: "Step 1", recipe_id: 1, priority: 1},
        {description: "Step 2", recipe_id: 1, priority: 2},
        {description: "Step 3", recipe_id: 1, priority: 3},
      ]);
    });
};
