exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('recipes').insert([
        {
          id: 1,
          name: 'cheese pizza',
          dish_id: 1,
          description: 'A simple cheese pizza'
        },
        {
          id: 2,
          name: 'eggplant pizza',
          dish_id: 1,
          description: 'A simple eggplant pizza'
        },
        {
          id: 3,
          name: 'chicken tacos',
          dish_id: 2,
          description: 'A simple chicken taco'
        },
        {
          id: 4,
          name: 'steak tacos',
          dish_id: 2,
          description: 'Some complex steak tacos'
        },
        {
          id: 5,
          name: 'spaghetti',
          dish_id: 3,
          description: "Mama Mia's favorite"
        },
        {
          id: 6,
          name: 'alfredo',
          dish_id: 3,
          description: 'Heavy cream for dinner? Yes please'
        }
      ]);
    });
};
