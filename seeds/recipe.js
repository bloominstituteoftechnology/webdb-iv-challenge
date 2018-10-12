
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipe').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipe').insert([
        {ingdnt_id: 1, ingdnt_qty: '4 cups', dish_id: 1 , action_id: 1, created_at:knex.fn.now(), updated_at:knex.fn.now()},
        {ingdnt_id: 2, ingdnt_qty: '2 tspns', dish_id: 1, action_id: 2, created_at:knex.fn.now(), updated_at:knex.fn.now()},
        {ingdnt_id: 3, ingdnt_qty: '1/4 lb', dish_id: 1, action_id: 2, created_at:knex.fn.now(), updated_at:knex.fn.now()},
        {ingdnt_id: 9, ingdnt_qty: 'none',  dish_id: 1, action_id: 4, created_at:knex.fn.now(), updated_at:knex.fn.now()},
        {ingdnt_id: 9, ingdnt_qty: 'none', dish_id: 1, action_id: 5, created_at:knex.fn.now(), updated_at:knex.fn.now()},
        {ingdnt_id: 9, ingdnt_qty: 'none', dish_id: 1, action_id: 6, created_at:knex.fn.now(), updated_at:knex.fn.now()},
      ]);
    });
};
