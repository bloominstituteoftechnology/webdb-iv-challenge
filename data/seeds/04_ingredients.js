
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {ingredient_name: 'chicken'},
        { ingredient_name: 'garlic'},
        { ingredient_name: 'green oinons' },
        { ingredient_name: 'ginger' },
        { ingredient_name: 'all-purpose flour' },
        { ingredient_name: 'lime' },
        { ingredient_name: 'coconut milk' },
        { ingredient_name: 'green curry paste' },
        { ingredient_name: 'pinapple' },
        { ingredient_name: 'sugar' },
        { ingredient_name: 'boboll pizza crust' },
        { ingredient_name: 'pizza sauce' },
        { ingredient_name: 'ham' },
        { ingredient_name: 'mozzarella cheese' },
        { ingredient_name: 'eggs' },
        { ingredient_name: 'vanilla' },
        { ingredient_name: 'butter' },
        { ingredient_name: 'brown sugar' },
        { ingredient_name: 'milk'},
        { ingredient_name: 'baking powder' },
        { ingredient_name: 'salt' }
      ]);
    });
};
