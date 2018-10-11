exports.seed = knex => {
  knex('ingredients')
    .truncate()
    .then(() => {
      knex('ingredients').insert([
        { id: 1, name: 'Buns' },
        { id: 2, name: 'Meat' },
        { id: 3, name: 'Cheese' }
      ]);
    });
};
