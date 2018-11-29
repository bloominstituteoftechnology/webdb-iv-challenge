exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients')
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex('ingredients').insert([
        { name: 'cup(s) of chicken stock' },
        { name: 'tablespoon(s) miso paste' },
        { name: 'inch piece of fresh ginger' },
        { name: 'red chile(s)' },
        { name: 'carrot(s)' },
        { name: 'cup(s) bok choy' },
        { name: 'ounce(s) dried egg cellophane noodles' },
        { name: 'cooked chicken breast(s)' },
        { name: 'scallion(s)' },
        { name: 'soy sauce to taste' }
      ]);
    });
};
