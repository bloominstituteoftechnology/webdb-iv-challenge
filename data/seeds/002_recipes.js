
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {name: 'pepperoni', dish_id: '1'},
        {name: 'chicken', dish_id: '1'},
        {name: 'egg', dish_id: '2'},
        {name: 'wonton', dish_id: '2'},
        {name: 'cheess', dish_id: '3'},
        {name: 'rib', dish_id: '4'},
      ]);
    });
};
