
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipe').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipe').insert([
        {id: 1, recipe_name: 'ajanta-recipe', dish_id: 1},
        {id: 2, recipe_name: 'moms-pizza-recipe', dish_id: 2},
        {id: 3, recipe_name: 'granny-taco-recipe', dish_id: 3}
      ]);
    });
};
