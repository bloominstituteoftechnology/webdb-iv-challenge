
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('instructions').del()
    .then(function () {
      // Inserts seed entries
      return knex('instructions').insert([
        {step_number: 1, step: "Turn on stove", recipe_id: 1},
        {step_number: 2, step: "Spray Pan", recipe_id: 1},
        {step_number: 1, step: "Make magic happen", recipe_id: 2},
      ]);
    });
};
