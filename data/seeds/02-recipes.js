
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        { name: 'Healthy Cold Cereal', dish_id: 1 },
        { name: 'Cold Cereal for Kids and Sugar Addicts', dish_id: 1 },
        { name: 'Wheat Toast with Jam', dish_id: 2 },
        { name: 'Dressed Up Coffee', dish_id: 3 }
      ]);
    });
};
