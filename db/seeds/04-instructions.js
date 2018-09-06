
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('instructions').del()
    .then(function () {
      // Inserts seed entries
      return knex('instructions').insert([
        {name: 'preheat oven'},
        {name: 'light grill'},
        {name: 'make crust', ingredients: [1, 23] },
        {name: 'put in oven'},
        {name: 'form beef into patties', ingredients:[12]},
        {name: 'assemble pizza on crust', ingredients: [13, 21, 16]},
        {name: ''},
        {name: ''},
        {name: ''}
      ]);
    });
};
