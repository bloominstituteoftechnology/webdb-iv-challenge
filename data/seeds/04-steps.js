
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {id: 1, name: 'Mash bananas with a fork until soft', ingredient_id: 25, amount: 3.0, recipie_id: 1},
        {id: 2, name: 'Add margarine', ingredient_id: 24, amount: 4.0, recipie_id: 1},
        {id: 3, name: 'Add sugar and cream mixture', ingredient_id: 8, amount: 4.0, recipie_id: 1},
        {id: 4, name: 'Boil potatoes until tender', ingredient_id: 14, amount: 1.0, recipie_id: 2},
        {id: 5, name: 'Boil macaroni in salted water until al dente', ingredient_id: 13, amount: 16.0, recipie_id: 2},
        {id: 6, name: 'Rinse and drain cashews', ingredient_id: 12, amount: 0.5, recipie_id: 2},
        {id: 7, name: 'Remove core from cabbage, and cut into fine strips', ingredient_id: 2, amount: 0.5, recipie_id: 3},
        {id: 8, name: 'Shred carrots with cheese grater', ingredient_id: 4, amount: 2.0, recipie_id: 3},
        {id: 9, name: 'Cut pepper into strips', ingredient_id: 3, amount: 2.0, recipie_id: 3},
      ]);
    });
};
