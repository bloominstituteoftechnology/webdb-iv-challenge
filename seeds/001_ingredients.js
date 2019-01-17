
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {name: 'a tomato'},
        {name: '1oz beef'},
        {name: 'half a salmon'},
        {name: 'a gram of oregino'},
        {name: 'a loaf of cheese'},
      ]);
    });
};
