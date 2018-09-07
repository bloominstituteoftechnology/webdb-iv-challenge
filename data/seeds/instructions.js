
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('instructions').del()
    .then(function () {
      // Inserts seed entries
      return knex('instructions').insert([
        {name: 'cook'},
        {name: 'stir'},
        {name: 'flip'},
        {name: 'put together'},
        {name: 'break'},
        {name: 'put in'}
      ]);
    });
};
