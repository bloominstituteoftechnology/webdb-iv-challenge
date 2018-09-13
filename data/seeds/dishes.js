
exports.seed = function(knex, Promise) {
  return knex('table_name').del()
    .then(function () {
      return knex('table_name').insert([
        {name: 'cereal'},
        {name: 'tacos'},
        {name: 'cake'}
      ]);
    });
};
