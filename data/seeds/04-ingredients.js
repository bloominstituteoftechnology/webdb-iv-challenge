
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        { ingredient_name: 'chicken breast' },
        { ingredient_name: 'head of lettuce' },
        { ingredient_name: 'salsa' },
        { ingredient_name: 'shredded cheese' },
        { ingredient_name: 'sour cream' },
        { ingredient_name: 'jalepenos' },
        { ingredient_name: 'tortilla shells' },
        { ingredient_name: 'black olives' },
        { ingredient_name: 'chicken seasoning' },
        { ingredient_name: 'hamburger meat' },
        { ingredient_name: 'hamburger buns' },
        { ingredient_name: 'pepperjack cheese slices' },
        { ingredient_name: 'onion' },
        { ingredient_name: 'green bell pepper' },
        { ingredient_name: 'assorted condiments' },
        { ingredient_name: 'pizza sauce' },
        { ingredient_name: 'pepperoni' },
        { ingredient_name: 'sausage' },
        { ingredient_name: 'asparagus' },
        { ingredient_name: 'red bell pepper' },
        { ingredient_name: 'garlic' },
        { ingredient_name: 'oatmeal' },
        { ingredient_name: 'strawberries' },
        { ingredient_name: 'blueberries' },
        { ingredient_name: 'bananas' },
        { ingredient_name: 'flax seeds' },
        { ingredient_name: 'hemp seeds' },
        { ingredient_name: 'chia seeds' },
        { ingredient_name: 'raisins' },
        { ingredient_name: 'cinammon' },
        { ingredient_name: 'water' },
        { ingredient_name: 'pizza dough' },
        { ingredient_name: 'italian seasoning' },
        { ingredient_name: 'rice' },
        { ingredient_name: 'avocado oil' }
      ]);
    });
};
