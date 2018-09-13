
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        { name: 'pepperoni pizza', dish_id: 15},
        { name: 'churizo tacos' , dish_id: 14},
        { name: 'chicken noodle soup', dish_id: 16}
      ]);
    });
};
