
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {name: 'texMex', instructions: 'mix sugar', dish_id: 1},
        {name: 'chipotle', instructions: 'pour salt', dish_id: 1},
        {name: 'the bell', instructions: 'eat dairy', dish_id: 1},
        {name: 'pepperoni', instructions: 'spread cheest', dish_id: 2},
        {name: 'supreme', instructions: 'put sauce on', dish_id: 2},
        {name: 'plain', instructions: 'bake for a while', dish_id: 2}
      ]);
    });
};
