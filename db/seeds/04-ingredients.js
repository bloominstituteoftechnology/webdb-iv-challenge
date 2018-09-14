
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {id: 1, name: 'pepparone you can only cook with one pepparone'},
        {id: 2, name: 'imma telling you there is nothing else here for you my friend please use the pepparone'}
      ]);
    });
};
