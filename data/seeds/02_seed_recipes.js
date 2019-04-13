
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {recipe_name: 'Chicken Tortellini Au Gratin', dishes_id: 1},
        {recipe_name: 'Mexican Street Corn Bake', dishes_id: 1},
        {recipe_name: 'Easy Beef Tacos', dishes_id: 2},
        {recipe_name: 'Chicken Tacos', dishes_id: 2},
      ]);
    });
};
