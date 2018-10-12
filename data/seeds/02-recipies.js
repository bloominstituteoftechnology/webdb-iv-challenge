
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipies').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('Recipies').insert([
        {recipeName: 'plain_cheese', 
        instructions: 'aaaaaaaaaaaaaaaaaaaaaaasdfgsdyufgsdufgsofsyigshihbfgihiisoshgisog',
        dish_id: 1 },

        {recipeName: 'peperoni', 
        instructions: 'bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbgsdufgsofsyigshihbfgihiisoshgisog',
        dish_id: 1 },

        {recipeName: 'mushroom', 
        instructions: 'cccccccccccccccccccccccccccccccccccfgsdyufgsdufgsofsyigshihbfgihiisoshgisog',
        dish_id: 1 },

        {recipeName: 'tex-mex', 
        instructions: 'dddddddddddddddddddddddddddddddddddfgsofsyigshihbfgihiisoshgisog',
        dish_id: 2 },

        {recipeName: 'homemade', 
        instructions: 'eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeesdufgsofsyigshihbfgihiisoshgisog',
        dish_id: 3},

        {recipeName: 'special_q', 
        instructions: 'ffffffffffffffffffffffffffffffffffffffsyigshihbfgihiisoshgisog',
        dish_id: 3 },
      ]);
    });
};
