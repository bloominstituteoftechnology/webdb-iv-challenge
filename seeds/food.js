
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('food').del()
    .then(function () {
      // Inserts seed entries
      return knex('food').insert([
        {name: 'Pasta', created_at:knex.fn.now(), updated_at:knex.fn.now()},
        {name: 'Pizza', created_at:knex.fn.now(), updated_at:knex.fn.now()},
        {name: 'Salad', created_at:knex.fn.now(), updated_at:knex.fn.now()}
      ]);
    });
};
