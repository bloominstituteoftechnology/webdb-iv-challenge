
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {name: '1# of beef'},
        {name: '1 can of tomatos'},
        {name: '1 whole tomato'},
        {name: '1# flour'},
        {name: 'roll of peperonies'},
        {name: '1 hamburger bun'},
        {name: 'head of lettus'},
        {name: 'katchup '},
        {name: 'mustard'},
        {name: 'cheese'},
        {name: 'salt'},
        {name: 'water'},
        {name: 'tortillas'}
        
      ]);
    });
};
