
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredient-unit').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredient-unit').insert([
        {ingredient_id:1 ,unit_id:1},
        {ingredient_id:2 ,unit_id:2},
        {ingredient_id:3 ,unit_id:1}
      ]);
    });
};
