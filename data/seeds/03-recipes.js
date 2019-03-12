
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        { name: 'buttermilk pancakes', dish_id: 3 },
        { name: 'whole-wheat pancakes', dish_id: 3 },
        { name: 'blueberry pancakes', dish_id: 3 },
        { name: 'deep dish pizza', dish_id: 1 },
        { name: 'New York style pizza', dish_id: 1 },
        { name: 'tex-mex tacos', dish_id: 2 },
        { name: 'granny\'s tacos', dish_id: 2 }
      ]);
    });
};
