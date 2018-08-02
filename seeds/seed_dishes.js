exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('dishes')
    .del()
    .then(() => knex('dishes').insert([
      { id: 1, name: 'pizza' },
      { id: 2, name: 'tacos' },
      { id: 3, name: 'smoothie' },
    ]));
};
