
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {
        id: 1,
        name: 'pizza',
        text: 'cheese pizza'
      },
      {
        id: 2,
        name: 'yummy hammy sandwich',
        text: 'A Ham and Cheese Sandwich'
      },

      ]);
    });
};
