
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('dishes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('dishes').insert([
        { name: 'burgers', description:'consisting of one or more cooked patties of ground meat, usually beef, placed inside a sliced bread roll or bun.'},
        { name: 'tacos', description:'A taco is a traditional Mexican dish consisting of a corn or wheat tortilla folded or rolled around a filling.'},
        { name: 'pizza', description:'Pizza is a savory dish of Italian origin, consisting of a usually round, flattened base of leavened wheat-based dough topped with tomatoes, cheese, and various other ingredients'}
      ]);
    });
};
