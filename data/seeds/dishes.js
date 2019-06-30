exports.seed = knex => {
  knex('dishes')
    .truncate()
    .then(() => {
      knex('dishes').insert([
        { id: 1, name: 'Hamburgers' },
        { id: 2, name: 'Hotdogs' },
        { id: 3, name: 'Steak' }
      ]);
    });
};
