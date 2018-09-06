
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('instructions').del()
    .then(function () {
      // Inserts seed entries
      return knex('instructions').insert([
        { name: 'Boil pasta'},
        { name: 'Heat up sauce'},
        { name: 'pour sauce on pasta'},
        { name: 'cook meat'},
        { name: 'fry everything'},
        { name: 'put food in the oven on 400, for awhile'},
        { name: 'add cheese'}
      ]);
    });
};
