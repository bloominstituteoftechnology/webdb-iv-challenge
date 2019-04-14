
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {name: 'papa pizza', dish_id: '2'},
        {name: 'domino piiza', dish_id: '2'},
        {name: 'wonton soup', dish_id: '1'},
        {name: 'boneless rib', dish_id: '1'},
        {name: 'cheess pizza', dish_id: '2'},
      ]);
    });
};
