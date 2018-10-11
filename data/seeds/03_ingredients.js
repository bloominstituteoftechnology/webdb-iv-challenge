
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {name: 'butter'},
        {name: 'flour'},
        {name: 'vanilla'},
        {name: 'sprinkles'},
        {name: 'food coloring'},
        {name: 'eggs.'},
        {name: 'milk'},
        {name: 'salt.'},
        {name: 'sugar'},
        {name: 'cinnamon.'},
        {name: 'bread.'},
        {name: 'bananas'},
        {name: 'baking powder.'},
        {name: 'baking soda.'},
        {name: 'salt.'},
      ]);
    });
};
