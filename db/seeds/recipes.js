
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {name:'Lemon Fried',dish_id:1},
        {name:'BBQ',dish_id:2}
      ]);
    });
};
