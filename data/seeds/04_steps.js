exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('steps').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {steps: 'put pizza sauce on pizza crust. add mozzarella cheese. bake', ingredient_id: 1, ingredient_id: 3, ingredient_id: 4, recipe_id: 1},
        {steps: 'put pizza sauce on pizza crust. add mozzarella cheese and then pepperoni. bake', ingredient_id: 1, ingredient_id: 2, ingredient_id: 3,ingredient_id:4, recipe_id: 2},
        {steps: 'cook ground beef, add cheese, put on bun', ingredient_id: 5, ingredient_id: 6, ingredient_id: 8, recipe_id: 3},
        {steps:'cook ground beef and bacon, add bacon to burger, put on bun',ingredient_id: 5, ingredient_id: 6, ingredient_id: 7, recipe_id: 4}
      ]);
    });
};