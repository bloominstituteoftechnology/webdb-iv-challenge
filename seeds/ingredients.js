
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {id: 1, name: 'sausage'},
        {id: 2, name: 'pepperoni'},
        {id: 3, name: 'artichoke heart'},
        {id: 4, name: 'garlic'},
        {id: 5, name: 'bell pepper'},
        {id: 6, name: 'red onion'},
        {id: 7, name: 'cheese'},
        {id: 8, name: 'sun dried tomato'},
        {id: 9, name: 'bun'},
        {id: 10, name: 'veggie dog'},
        {id: 11, name: 'beef'},
        {id: 12, name: 'blue cheese'},
        {id: 13, name: 'bacon'}
      ]);
    });
};
