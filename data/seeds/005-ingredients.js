
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {id: 1, name: 'tomatoes'},
        {id: 2, name: 'eggs'},
        {id: 3, name: 'tomatillo'},
        {id: 1, name: 'cotija cheese (cups)'},
        {id: 2, name: 'flour (cups)'},
        {id: 3, name: 'parmesean (Tablespoons)'},
      ]);
    });
};
