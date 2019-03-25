
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('instructions').del()
    .then(function () {
      // Inserts seed entries
      return knex('instructions').insert([
        {recipie_id: '1', step: '1', instruction: 'Prepare workstation.'},
        {recipie_id: '1', step: '2', instruction: 'Grab ingredients for tacos.'},
        {recipie_id: '2', step: '3', instruction: 'Mix in a bowl and bake until brown.'}
      ]);
    });
};
