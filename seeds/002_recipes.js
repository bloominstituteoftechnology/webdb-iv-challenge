
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {name: 'sausage pizza', dish_id:'15', ing_id:'1'},
        {name: 'chicken parmesan', dish_id:'14', ing_id:'2'},
        {name: 'noodle', dish_id:'13', ing_id:'3'}
      ]);
    });
};
