
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        { name: 'Pizza Marinara', instructions: 'some stuff', dishes_id: 1 },
        { name: 'tex-mex', instructions: 'some stuff', dishes_id: 2 },
        { name: 'granny\'s', instructions: 'some stuff', dishes_id: 2 }
      ]);
    });
};
