
exports.seed = function(knex, Promise) {
  //Deletes ALL existing entries
  return knex('dish').del()
    .then(function () {
      // Inserts seed entries
      return knex('dish').insert([
        {name: 'Italian',food_id:4, created_at:knex.fn.now(), updated_at:knex.fn.now()},
        {name: 'Chinese',food_id:4, created_at:knex.fn.now(), updated_at:knex.fn.now()},
        {name: 'Spring' ,food_id:6, created_at:knex.fn.now(), updated_at:knex.fn.now()},
        {name: 'Beet'   ,food_id:6, created_at:knex.fn.now(), updated_at:knex.fn.now()}
      ]);
    });
};
