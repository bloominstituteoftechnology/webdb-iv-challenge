
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('rec_ingreds').del()
    .then(function () {
      // Inserts seed entries
      return knex('rec_ingreds').insert([
        {id: 1, rec_id: 1, amt: 2, msmnt: 'lbs', ingred_id: 1},
        {id: 2, rec_id: 1, amt: 1, msmnt: 'cup', ingred_id: 2},
        {id: 3, rec_id: 1, amt: 1, msmnt: '', ingred_id: 3},
        {id: 4, rec_id: 2, amt: 1, msmnt: 'handfull', ingred_id: 4},
        {id: 5, rec_id: 2, amt: 6, msmnt: '', ingred_id: 5},
        {id: 6, rec_id: 2, amt: 2, msmnt: 'cups', ingred_id: 6},
        {id: 7, rec_id: 3, amt: 2, msmnt: 'slices', ingred_id: 7},
        {id: 8, rec_id: 3, amt: 0.25, msmnt: 'cup', ingred_id: 8},
        {id: 9, rec_id: 3, amt: 2, msmnt: 'slices', ingred_id: 9},
      ]);
    });
};
