exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('ingredients').insert([
        { ingredient: 'ground beef' },
        { ingredient: 'taco seasoning' },
        { ingredient: 'tortillas' },
        { ingredient: 'lettuce' },
        { ingredient: 'shredded cheese' },
        { ingredient: 'chicken breast' },
        { ingredient: 'alfredo sauce' },
        { ingredient: 'pasta noodles' },
        { ingredient: 'ground bison' },
        { ingredient: 'hamburger bun' }
      ]);
    });
};
