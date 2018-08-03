
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('dishes').del()
    .then(function () {
      // Inserts seed entries
      return knex('dishes').insert([
        {
        id: 1,
        name: 'cheese',
        text: 'These are dishes that serve cheese'
      },
     {
        id: 1,
        name: 'Deli Meats',
        text: 'These are dishes that serve Deli Meats like ham'
      },
      ]);
    });
};
