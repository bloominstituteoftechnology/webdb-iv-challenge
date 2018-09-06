
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {id: 1, amount: 0.25, units: 'ounces', name: 'active dry yeast'},
        {id: 2, amount: 1, units: 'teaspoon', name: 'sugar'},
        {id: 3, amount: 1.25, units: 'cups', name: 'warm water, 110 to 115 degrees F'},
        {id: 4, amount: 0.25, units: 'cups', name: 'canola oil'},
        {id: 5, amount: 1, units: 'teaspoon', name: 'salt'},
        {id: 6, amount: 3.5, units: 'cups', name: 'all-purpose flour'},
        {id: 7, amount: 0.5, units: 'pound', name: 'ground beef'},
        {id: 8, amount: 1, units: 'whole', name: 'small chopped onion'},
        {id: 9, amount: 1, units: '15-oz can', name: 'tomato sauce'},
        {id: 10, amount: 3, units: 'teaspoons', name: 'dried oregano'},
        {id: 11, amount: 1, units: 'teaspoon', name: 'dried basil'},
        {id: 12, amount: 1, units: 'whole', name: 'medium green pepper, diced'},
        {id: 13, amount: 2, units: 'cups', name: 'shredded part-skim mozzarella cheese'},
        {id: 14, amount: 1, units: 'pound', name: 'ground beef'},
        {id: 15, amount: 1, units: 'clove', name: 'garlic, finely chopped'},
        {id: 16, amount: 2, units: 'teaspoons', name: 'chili powder'},
        {id: 17, amount: 1, units: 'teaspoon', name: 'dried oregano'},
        {id: 18, amount: 0.5, units: 'teaspoons', name: 'ground cumin'},
        {id: 19, amount: 1, units: 'pinches', name: 'salt and pepper'},
        {id: 20, amount: 1, units: 'box of 12', name: 'taco shells'},
        {id: 21, amount: 1, units: 'package', name: 'shredded lettuce'},
        {id: 22, amount: 1, units: 'can', name: 'diced tomatoes'},
        {id: 23, amount: 1, units: 'bag', name: 'shredded sharp cheddar cheese'},
        {id: 24, amount: 1, units: 'container', name: 'salsa'},
        {id: 25, amount: 1, units: 'container', name: 'sour cream'},
        {id: 26, amount: 1, units: 'whole', name: 'lime cut into wedges'},
        {id: 27, amount: 1, units: 'package', name: 'thinly sliced scallions'},
        {id: 28, amount: 1, units: 'bag', name: 'chopped cilantro'},
        {id: 29, amount: 0.5, units: 'pounds', name: 'butter, plus more for pan'},
        {id: 30, amount: 0.5, units: 'cups', name: 'vegetable shortening'},
        {id: 31, amount: 3, units: 'cups', name: 'sugar'},
        {id: 32, amount: 5, units: 'whole', name: 'eggs'},
        {id: 33, amount: 3, units: 'cups', name: 'all-purpose flur, plus more for pan'},
        {id: 34, amount: 0.5, units: 'teaspoons', name: 'fine salt'},
        {id: 35, amount: 0.5, units: 'teaspoons', name: 'baking powder'},
        {id: 36, amount: 1, units: 'cup', name: 'milk'},
        {id: 37, amount: 1, units: 'teaspoon', name: 'vanilla extract'}
      ]);
    });
};
