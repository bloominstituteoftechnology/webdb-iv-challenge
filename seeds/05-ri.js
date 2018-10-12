exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('r_i')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('r_i').insert([
        { id: 1, r_id: 1, i_id: 1 },
        { id: 2, r_id: 1, i_id: 1 },
        { id: 3, r_id: 1, i_id: 1 },
        { id: 4, r_id: 1, i_id: 1 },
        { id: 5, r_id: 1, i_id: 1 },
        { id: 6, r_id: 1, i_id: 1 },
        { id: 7, r_id: 1, i_id: 1 },
        { id: 8, r_id: 1, i_id: 1 },
        { id: 9, r_id: 1, i_id: 1 },
        { id: 10, r_id: 1, i_id: 1 },
      ]);
    });
};
