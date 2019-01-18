exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('recipes').insert([
        { name: 'Ahi Tuna Taco', dish_id: 1 },
        { name: 'Neopolitan Pizza', dish_id: 2 },
        { name: 'Pressure Cooker Beef Stew', dish_id: 3 },
      ]);
    });
};
