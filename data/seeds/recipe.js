exports.seed = knex => {
  knex('recipe')
    .truncate()
    .then(() => {
      knex('recipe').insert([
        { id: 1, name: 'Tacos', dish_id: 1 },
        { id: 2, name: 'Eggs', dish_id: 2 },
        { id: 3, name: 'Pancakes', dish_id: 3 }
      ]);
    });
};
