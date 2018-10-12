
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipe').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipe').insert([
        {name: 'Tex-Mex',dish_id:2},
        {name: "Granny's",dish_id:1},
        {name: 'Italian', dish_id:1}
      ]);
    });
};
