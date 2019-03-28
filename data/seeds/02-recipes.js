
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        { recipe_name: 'Granny', dish_id:'2'},
        { recipe_name: 'Classic', dish_id:'1'},
      ]);
    });
};
