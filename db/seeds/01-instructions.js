
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('instructions').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('instructions').insert([
        {name: 'Preheat Oven'},
        {name: 'Mix ingredients'},
        {name: 'Bake'}
      ]);
    });
};
