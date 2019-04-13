
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('instructions').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('instructions').insert([
        { step_number: 1, step: 'Cook groundbeef over medium heat 15 min',  recipes_id: 1 },
        { step_number: 2, step: 'Fry tortillas', recipes_id: 1 },
        { step_number: 3, step: 'Add beans,shredded cheese and onions in tortilla with meat.', recipes_id: 1 },
        { step_number: 1, step: 'Use chocolate and vanilla to make a cake then eat it.', recipes_id: 2 },
        { step_number: 1, step: 'Add apples and sugar together in to a pie and eat',  recipes_id: 3 },
        { step_number: 1, step: 'Take Creamcheese and make a cake', recipes_id: 4 },
        { step_number: 1, step: 'Take Pumpkin and flour then make a pie', recipes_id: 6 },
        { step_number: 1, step: 'Cook groundbeef over low heat 25 min', recipes_id: 5 },
        { step_number: 2, step: 'Bake tortillas', recipes_id: 5 },
        { step_number: 3, step: 'Add meat and cream cheese in tortilla.', recipes_id: 5 },
      ]);
    });
};
