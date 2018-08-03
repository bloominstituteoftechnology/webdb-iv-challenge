
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipe').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipe').insert([
        {recipe_name: 'Chicken', recipe_description: 'this is my favorite thing to eat', cooking_instruct_id: 1, servings:4},
        {recipe_name: 'Cup Cakes', recipe_description: 'yes I like this too', cooking_instruct_id: 1, servings:3}
      ]);
    });
};
