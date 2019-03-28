exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('steps')
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex('steps').insert([
        {
          recipe_id: 1,
          step:
            'Pour the stock along with one cup of boiling water in a sucepan and bring it to a boil over medium-high heat. Add the miso paste and simmer for 1-2 minutes.',
          order: 1
        },
        {
          recipe_id: 1,
          step:
            'Add the ginger, chile, carrot, bok choy, cooked noodles, and chicken. Simmer for an additional 4-5 minutes. Season with soy sauce.',
          order: 2
        },
        {
          recipe_id: 1,
          step:
            'Sprinkle the scallions over the bottom of two serving dishes and pour the soup over them. Serve Immediately',
          order: 3
        }
      ]);
    });
};
