exports.seed = (knex, Promise) => {
  return knex('dishes').truncate()
    .then(() => {
      return knex('dishes').insert([
        { name: 'pizza' },
        { name: 'tacos' },
        { name: 'eggs' }
      ]);
    });
};
