
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredient').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredient').insert([
        { ingredient_name: 'butter' },
        { ingredient_name: 'white sugar' },
        { ingredient_name: 'dark brown sugar' },
        { ingredient_name: 'eggs' },
        { ingredient_name: 'coconut emulsion' },
        { ingredient_name: 'cake flour' },
        { ingredient_name: 'all-purpose flour' },
        { ingredient_name: 'bread flour' },
        { ingredient_name: 'salt' },
        { ingredient_name: 'baking soda' },
        { ingredient_name: 'corn startch' },
        { ingredient_name: 'semi-sweet chocolate chips' },
        { ingredient_name: 'milk chocolate chips' },
        { ingredient_name: 'rolled oats' },
        { ingredient_name: 'coconut' },
        { ingredient_name: 'yeast' },
        { ingredient_name: 'water' },
        { ingredient_name: 'olive oil' }
      ]);
    });
};
