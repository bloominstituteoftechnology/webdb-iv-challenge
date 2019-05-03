
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {id: 1, name: 'big mac', instructions: 'burger with sauce', dish_id:'2'},
        {id: 2, name: 'lobster mac and cheese', instructions: 'lobster with mac and cheese', dish_id:'1'}
      ]);
    });
};
