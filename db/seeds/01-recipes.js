
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {name: 'Crab Rangoon'},
        {name: 'Orange Chicken'},
        {name: 'Sweet and Sour Pork'},
        {name: 'California Roll'},
        {name: 'Chicken Teriyaki'},
        {name: 'Gyoza'},
        {name: 'Pancakes'},
        {name: 'Breakfast Platter'},
        {name: 'Belgian Waffle'},
      ]);
    });
};