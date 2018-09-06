exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('recipes').insert([
        { name: 'PMS Pizza', dish_id: 1 },
        { name: 'Microwave Mug Pizza', dish_id: 1 },
        { name: 'Carnitas Street Tacos', dish_id: 2 },
        { name: 'Chicken Tacos', dish_id: 2 },
      ]);
    });
};
