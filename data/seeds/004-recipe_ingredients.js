
exports.seed = function(knex, Promise) {
      // Inserts seed entries
      return knex('recipe_ingredients').insert([
        {recipe_id: 1, ingredient_id: 1, quantity: 'a cup of flour'},
        {recipe_id: 1, ingredient_id: 2, quantity: 'a tablespoon of vanilla'},
        {recipe_id: 1, ingredient_id: 3, quantity: 'a gram of melted butter'},
        {recipe_id: 1, ingredient_id: 4, quantity: 'half a cup of brown sugar'},
        {recipe_id: 1, ingredient_id: 5, quantity: 'a teaspoon of cinnamon'},
        {recipe_id: 1, ingredient_id: 6, quantity: 'three large eggs'},
        {recipe_id: 2, ingredient_id: 6, quantity: 'three large eggs'},
        {recipe_id: 2, ingredient_id: 7, quantity: 'a pinch of salt'},
        {recipe_id: 2, ingredient_id: 8, quantity: 'a stick of butter'},
        {recipe_id: 2, ingredient_id: 9, quantity: 'a tablespoon of honey'},
        {recipe_id: 2, ingredient_id: 10, quantity: 'a teaspoon of garlic powder'},
        {recipe_id: 2, ingredient_id: 11, quantity: 'a dash of cayenne pepper'},
        {recipe_id: 2, ingredient_id: 12, quantity: 'three corn on the cobs'},
        {recipe_id: 3, ingredient_id: 7, quantity: 'a pinch of salt'},
        {recipe_id: 3, ingredient_id: 13, quantity: '3 cherry tomatoes'},
        {recipe_id: 3, ingredient_id: 14, quantity: 'half an onion diced'},
        {recipe_id: 3, ingredient_id: 15, quantity: 'one large red bell peppers diced'},
        {recipe_id: 3, ingredient_id: 16, quantity: 'a bunch of mushrooms'},
        {recipe_id: 3, ingredient_id: 17, quantity: 'bag of shredded cheese'},
        {recipe_id: 3, ingredient_id: 18, quantity: 'a stem of cilantro'},
        {recipe_id: 3, ingredient_id: 19, quantity: ' a bunch of spinach'}
      ]);
};
