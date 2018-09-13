
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('instructions').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('instructions').insert([
        {name: 'preheat oven'},
        {name: 'light grill'},
        {name: 'make crust', ingredients: '[4, 12]' },
        {name: 'put in oven'},
        {name: 'form beef into patties', ingredients: '[12]'},
        {name: 'assemble pizza on crust', ingredients: '[13, 21, 16]'},
        {name: 'cook beef', ingredients: '[1]'},
        {name: 'assemble burger', ingredients: '[1, 6, 8, 9, 10]'},
        {name: 'assemble tacos', ingredients: '[13, 1, 3, 7, 10]'}
      ]);
    });
};
