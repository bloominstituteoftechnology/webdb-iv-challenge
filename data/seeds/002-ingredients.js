
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {name: 'Potatoes'},
        {name: 'Butter'},
        {name: 'Lettuce'},
        {name: 'Cheese'},
        {name: 'Dough'},
        {name: 'Tomatoes'},
        {name: 'Salt'},
        {name: 'Egg'}
      ]);
    });
};
