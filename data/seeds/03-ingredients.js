
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {name: 'flour tortilla'},
        {name: 'pinto beans'},
        {name: 'chicken'},
        {name: 'bread'},
        {name: 'turkey'},
        {name: 'mayo'},
        {name: 'pizza dough'},
        {name: 'red sauce'},
        {name: 'pepperoni'},
        {name: 'cheese'},
      ]);
    });
};
