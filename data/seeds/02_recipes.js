exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes')
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex('recipes').insert([
        { id: 1, name: 'Homemade Pancakes', dish_id: '2' },
        { id: 2, name: 'Tex-mex Tacos', dish_id: '1' },
        { id: 3, name: 'Granny Pancakes', dish_id: '2' },
        { id: 4, name: 'Black Bean Burgers', dish_id: '3' },
        { id: 5, name: 'Steak Tacos', dish_id: '1' },
        { id: 6, name: 'Fancy Tacos', dish_id: '1' },
      ]);
    });
};
