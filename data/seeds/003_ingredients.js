
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        { name: 'panko breadcrumbs'},
        { name: 'oil'},
        { name: 'chicken breasts'},
        { name: 'salt'},
        { name: 'pepper'},
        { name: 'swiss cheese'},
        { name: 'mayonaise'},
        { name: 'egg'},
        { name: 'butter'},
        { name: 'flour'},
        { name: 'milk'},
        { name: 'oregano'},
        { name: 'pepper flakes'},
        { name: 'tomatoes'},
        { name: 'mozzarella cheese'},
        { name: 'parmesan cheese'},
        { name: 'red pepper'},
        { name: 'basil'}
      ]);
    });
};
