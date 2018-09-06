
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipe_steps').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipe_steps').insert([
        {step: 'do this', recipe_id: 1},
        {step: 'then do that', recipe_id: 1},
        {step: 'whoahow', recipe_id: 1},
        {step: 'more stuff', recipe_id: 2},
        {step: 'measure that', recipe_id: 2},
        {step: 'coolcoolcool', recipe_id: 2},
        {step: 'start here', recipe_id: 3},
        {step: 'step2', recipe_id: 3},
        {step: 'u done', recipe_id: 3},
        {step: 'another', recipe_id: 4},
        {step: 'tasty', recipe_id: 4},
        {step: 'din', recipe_id: 4},
        {step: 'i hate this', recipe_id: 5},
        {step: 'dont you', recipe_id: 5},
        {step: 'jk', recipe_id: 5},
        {step: 'first some leaves', recipe_id: 6},
        {step: 'then other leaves', recipe_id: 6},
        {step: 'dressin', recipe_id: 6},
      ]);
    });
};
