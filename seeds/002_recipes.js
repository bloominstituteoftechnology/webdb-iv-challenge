
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes')
  .del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {name: 'tex-mex', dish_id: 1},
        {name: 'grannys', dish_id:1},
        {name: 'pepperoni', dish_id:1}
      ]);
    });
};
