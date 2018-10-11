
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {name: 'lettuce'},
        {name: 'tomato'},
        {name: 'croutons'},
        {name: 'dressing'},
        {name: 'cheese'},
        {name: 'all-purpose flour'},
        {name: 'yeast'},
        {name: 'water'},
        {name: 'marinara sauce'},
        {name: 'taco shells'},
        {name: 'ground beef'},
        {name: 'olive oil'},
        
      ]);
    });
};
