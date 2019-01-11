
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('steps').del()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        {name: 'knead', description: 'work into dough with hands'},
        {name: 'mix', description: 'to put together in a bowl'},
        {name: 'cook', description: 'to heat under high heat'}
      ]);
    });
};
