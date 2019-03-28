exports.seed = (knex, Promise) => {
  return knex('ingredients').truncate()
    .then(() => {
      return knex('ingredients').insert([
        { name: 'fish' },
        { name: 'bread' },
        { name: 'tortilla' },
        { name: 'egg' },
        { name: 'beef' },
        { name: 'BBQ sauce' },
        { name: 'parsley' },
        { name: 'salt' },
        { name: 'a pinch of love' }
      ]);
    });
};
