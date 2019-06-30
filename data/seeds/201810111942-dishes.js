exports.seed = function(knex, Promise) {
  return knex('dishes').truncate()
    .then(() => {
      return knex('dishes').insert([
        {name: 'breakfast'},
        {name: 'lunch'},
        {name: 'dinner'},
        {name: 'dessert'},
        {name: 'appetizers'},
        {name: 'soup'},
        {name: 'drinks'},
        {name: 'sauce'}
      ]);
    });
};
