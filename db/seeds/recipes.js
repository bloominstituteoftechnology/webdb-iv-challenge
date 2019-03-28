exports.seed = (knex, Promise) => {
  return knex('recipes').truncate()
    .then(() => {
      return knex('recipes').insert([
        { name: 'NY', dish_id: 1 },
        { name: 'Chicago', dish_id: 1 },
        { name: 'Sicilian', dish_id: 1 },
        { name: 'fish', dish_id: 2 },
        { name: 'beef', dish_id: 2 },
        { name: 'scrambled', dish_id: 3 },
        { name: 'sunny-side up', dish_id: 3 },
        { name: 'over easy', dish_id: 3 },
        { name: 'boiled', dish_id: 3 }
      ]);
    });
};
