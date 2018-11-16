
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {id: 1, steps: 'make tortillas, mix ingredients, cook on stove top'},
        {id: 2, steps: 'roll out dough, chop tomatoes, boil water'},
      ]);
    });
};
