
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {id: 1, name: 'Tex Mex'},
        {id: 2, name: 'Italian'},
        {id: 3, name: 'Spicy'}
      ]);
    });
};
