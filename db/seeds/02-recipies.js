exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        { name: 'grandamas tacos', dish_id: '1', ingredient_ids: '[]', instructions_id: '[]'},
        { name: 'chicago pizza', dish_id: '2', ingredient_ids: '[]', instructions_id: '[]'},
        { name: 'brets burgers', dish_id: '3', ingredient_ids: '[]', instructions_id: '[]'},
        { name: 'thin crust pizza', dish_id: '2', ingredient_ids: '[]', instructions_id: '[]'},
        { name: 'tex-mex taco', dish_id: '1', ingredient_ids: '[]', instructions_id: '[]'},
        { name: 'sunny side up burger', dish_id: '3', ingredient_ids: '[]', instructions_id: '[]'}
      ]);
    });
};
