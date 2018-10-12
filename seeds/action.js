
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('action').del()
    .then(function () {
      // Inserts seed entries
      return knex('action').insert([
        {name: 'Boil', created_at:knex.fn.now(), updated_at:knex.fn.now()},
        {name: 'Add', created_at:knex.fn.now(), updated_at:knex.fn.now()},
        {name: 'Cook',temp: 450, time: 15, created_at:knex.fn.now(), updated_at:knex.fn.now()},
        {name: 'Cool',time:5, created_at:knex.fn.now(), updated_at:knex.fn.now()},
        {name: 'Serve', created_at:knex.fn.now(), updated_at:knex.fn.now()}
      ]);
    });
};
