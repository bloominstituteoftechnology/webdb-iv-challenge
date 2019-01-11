
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {name: 'meat', dishes_id:1 },
        {name: 'veggie', dishes_id:2},
        {name: 'combo', dishes_id:3}
      ]);
    });
};
