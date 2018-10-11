
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        { name: 'spicy tacos', description: 'a really spicy taco dish', dish_id: 1},
        { name: 'cheesy lasagna', description: 'a really cheesy lasagna dish', dish_id: 2},
        { name: 'baslamic chicken', description: 'a really baslamicy chicken dish', dish_id: 3},
        { name: 'fish tacos', description: 'a really fishy taco dish', dish_id: 1},
        { name: 'veggie lasagna', description: 'a really green lasagna dish', dish_id: 2},
        { name: 'teriyaki chicken', description: 'a really oriental chicken dish', dish_id: 3}
      ]);
    });
};
