
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('steps').del()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        { step_info: 'Prep everything up and mix it for how ever long google suggest', step_seq : 1, recipe_id: 1},
        { step_info: 'Cook for 1 hour on meduium heat', step_seq : 2, recipe_id: 1},
        { step_info: 'Simmer low for 10 mins', step_seq : 3, recipe_id: 1},
        { step_info: 'Bake in oven at 350 degrees until golden brown', step_seq: 3, recipe_id: 3 },
        { step_info: 'Mix all ingrediants in a large bowl stirring for 5 mins', step_seq: 1, recipe_id: 3 },
        { step_info: 'Pour into an 8 inch deep pan', step_seq: 2, recipe_id: 3 },
        { step_info: 'Cover Large Pizza with Sauace. ', step_seq : 1, recipe_id: 2},
        { step_info: 'Add toppings to Pizza and set oven to pre-heat at 450 ', step_seq: 2, recipe_id: 2 },
        { step_info: 'Bake Pizza until golden brown and cheese is melted ', step_seq: 3, recipe_id: 2 },
      ]);
    });
};
