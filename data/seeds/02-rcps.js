
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('rcps').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('rcps').insert([
        {rcps_nme: 'Baked', dshs_id: 2},
        {rcps_nme: 'Grilled', dshs_id: 1},
        {rcps_nme: 'Fried', dshs_id: 3}
      ]);
    });
};
