
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {id: 1, name: 'sausage pizza', dish_id:'3', ing_id:'1'},
        {id: 2, name: 'chicken parmesan', dish_id:'2', ing_id:'2'},
        {id: 3, name: 'noodle', dish_id:'1', ing_id:'3'}
      ]);
    });
};
