
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {name: 'beef'},
        {name: 'cheddar cheese'},
        {name: 'hot sauce'},
        {name: 'mozzarella'},
        {name: 'tomatoes'},
        {name: 'dough'},
        {name: 'noodles'},
        {name: 'olive oil'},
        {name: 'pork'},
        {name: 'chicken broth'},
        {name: 'pepperoni'},
        {name: 'italian sausage'},
        {name: 'salt'}
      ]);
    });
};
