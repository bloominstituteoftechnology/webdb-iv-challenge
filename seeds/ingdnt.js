
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingdnt').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingdnt').insert([
        {name: 'water', created_at:knex.fn.now(), updated_at:knex.fn.now()},
        {name: 'salt', created_at:knex.fn.now(), updated_at:knex.fn.now()},
        {name: 'pasta', created_at:knex.fn.now(), updated_at:knex.fn.now()},
        {name: 'fish sauce', created_at:knex.fn.now(), updated_at:knex.fn.now()},
        {name: 'soy sauce', created_at:knex.fn.now(), updated_at:knex.fn.now()},
        {name: 'garbanzo beans', created_at:knex.fn.now(), updated_at:knex.fn.now()},
        {name: 'arugula', created_at:knex.fn.now(), updated_at:knex.fn.now()},
        {name: 'tomatoes', created_at:knex.fn.now(), updated_at:knex.fn.now()},
        {name: 'none', created_at:knex.fn.now(), updated_at:knex.fn.now()},
      ]);
    });
};
