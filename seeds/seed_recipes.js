exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes')
    .del()
    .then(() => knex('recipes').insert([
      { id: 1, name: 'zesty tacos', dish: 'tacos' },
      { id: 2, name: 'crazy tacos', dish: 'tacos' },
      { id: 3, name: 'marshmallow pizza', dish: 'pizza' },
    ]));
};
