
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('igds_nmes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('igds_nmes').insert([
        {igds_nme: 'bread'},
        {igds_nme: 'butter'},
        {igds_nme: 'milk'},
        {igds_nme: 'rice'},
        {igds_nme: 'flour'},
        {igds_nme: 'cheese'},
        {igds_nme: 'cinnamon'},
        {igds_nme: 'honey'},
        {igds_nme: 'sugar'}
      ]);
    });
};
