
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('dish').del()
    .then(function () {
      // Inserts seed entries
      return knex('dish').insert([
        {id: 1, name: 'Tacos'},
        {id: 2, name: 'Pasta'},

      ]);
    });
};
