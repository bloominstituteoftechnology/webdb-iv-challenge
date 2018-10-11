
exports.seed = function(knex, Promise) {
  return knex('units')
    .truncate()
    .then(function () {
      return knex('units').insert([
        {unit: 'cup'},
        {unit: 'cups'},
        {unit: 'tablespoon'},
        {unit: 'tablespoons'},
        {unit: 'pound'},
        {unit: 'pounds'}
      ]);
    });
};
