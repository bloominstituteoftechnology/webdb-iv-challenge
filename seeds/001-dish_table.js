
exports.seed = function(knex, Promise) {
  return knex('dish_table').del()
    .then(() => {
      return knex('dish_table').insert([
        {name: 'Chocolate cake'},
        {name: 'Seasoned corn'},
        {name: 'Omelet'}
      ]);
    })
};


