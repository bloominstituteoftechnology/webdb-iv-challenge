
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ists').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ists').insert([
        {desc: 'Bake', qnty: 1, igds_id: 1, stps: 1, rcps_id: 1},
        {desc: 'Grill', qnty: 3, igds_id: 6, stps: 3, rcps_id: 2},
        {desc: 'Fry', qnty: 5, igds_id: 4, stps: 4, rcps_id: 3},
        {desc: 'Cut', qnty: 1, igds_id: 2, stps: 2, rcps_id: 3}
      ]);
    });
};
