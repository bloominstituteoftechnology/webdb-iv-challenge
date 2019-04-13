
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('instructions').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('instructions').insert([
        {id: 1, steps: 'make tortillas, mix ingredients, cook on stove top'},
        {id: 2, steps: 'roll out dough, chop tomatoes, boil water'},
      ]);
    });
};
