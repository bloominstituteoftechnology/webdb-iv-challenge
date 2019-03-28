exports.seed = knex => knex('recipes')
  .del()
  .then(() => knex('recipes').insert([
    { id: 1, name: 'zesty tacos', dishId: 2 },
    { id: 2, name: 'crazy tacos', dishId: 2 },
    { id: 3, name: 'marshmallow pizza', dishId: 1 },
  ]));
