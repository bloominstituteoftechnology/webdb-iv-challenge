
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('steps').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        {recipe_id: 1, steps: 'Add the scallions and veggies and stir-fry for 1 1/2 minutes'},
        {recipe_id: 1, steps: 'Add the soy sauce, sesame oil and rice and stir-fry for 2 to 3 minutes'},
        {recipe_id: 1, steps: 'Add the meat, peas, and reserved egg, cook, stirring until heated through, about 2 to 3 minutes'},
      ]);
    });
};
