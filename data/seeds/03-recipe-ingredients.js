
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipe_ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipe_ingredients').insert([
        //Spicy Chicken Tacos
        { amount: '4', recipes_id: 1, ingredient_id: 1 }, //chicken breasts
        { amount: '1/4', recipes_id: 1, ingredient_id: 2 }, // lettuce
        { amount: '2 cups', recipes_id: 1, ingredient_id: 3 }, // salsa
        { amount: '2 cups', recipes_id: 1, ingredient_id: 4 }, // shredded cheese
        { amount: '1/2 cup', recipes_id: 1, ingredient_id: 5 }, // sour cream
        { amount: '8', recipes_id: 1, ingredient_id: 6 }, // jalepenos
        { amount: '8', recipes_id: 1, ingredient_id: 7 }, // tortilla shells
        { amount: '10', recipes_id: 1, ingredient_id: 8 }, //black olives
        { amount: '3 tbsp', recipes_id: 1, ingredient_id: 9 }, // chicken seasoning

        //Meatloaf Burgers
        { amount: '6 lbs', recipes_id: 2, ingredient_id: 10 }, //hamburger meat
        { amount: '8', recipes_id: 2, ingredient_id: 6 }, // jalepenos
        { amount: '12', recipes_id: 2, ingredient_id: 11 }, // hamburger buns
        { amount: '12 slices', recipes_id: 2, ingredient_id: 12 }, // pepperjack cheese
        { amount: '1 large', recipes_id: 2, ingredient_id: 13 }, // onions
        { amount: '1', recipes_id: 2, ingredient_id: 14 }, // green bell pepper
        { amount: 'up to you', recipes_id: 2, ingredient_id: 15 }, //assorted condiments

        //Tortilla Pizzas
        { amount: '2 cups', recipes_id: 3, ingredient_id: 16 }, //pizza sauce
        { amount: '2 cups', recipes_id: 3, ingredient_id: 4 }, //shredded cheese
        { amount: '1 pack', recipes_id: 3, ingredient_id: 17 }, //pepperonis
        { amount: '1 cup', recipes_id: 3, ingredient_id: 18 }, //sausage
        { amount: '1 large', recipes_id: 3, ingredient_id: 13 }, // onions
        { amount: '10', recipes_id: 3, ingredient_id: 8 }, // black olives
        { amount: '1/2', recipes_id: 3, ingredient_id: 14 }, //green bell pepper
        { amount: '6', recipes_id: 3, ingredient_id: 6 }, // jalepenos
        { amount: '10', recipes_id: 3, ingredient_id: 7 }, //tortilla shells

        //Riceless Stir-fry
        { amount: '1 bundle', recipes_id: 4, ingredient_id: 19 }, //asparagus
        { amount: '1 large', recipes_id: 4, ingredient_id: 13 }, // onion
        { amount: '1 large', recipes_id: 4, ingredient_id: 14 }, //green bell pepper
        { amount: '1 large', recipes_id: 4, ingredient_id: 20 }, // red bell pepper
        { amount: '4', recipes_id: 4, ingredient_id: 1 }, // chicken breast
        { amount: '4 tbsp', recipes_id: 4, ingredient_id: 9 }, //chicken seasoning
        { amount: '16 cloves', recipes_id: 4, ingredient_id: 21 }, // garlic
        { amount: '4 tbsp', recipes_id: 4, ingredient_id: 35 }, //avocado oil


        //Morning Oatmeal
        { amount: '1 3/4 cups', recipes_id: 5, ingredient_id: 22 }, // oatmeal
        { amount: '2 lbs', recipes_id: 5, ingredient_id: 23 }, // strawberries
        { amount: '1 lb', recipes_id: 5, ingredient_id: 24 }, // blueberries
        { amount: '5', recipes_id: 5, ingredient_id: 25 }, // bananas
        { amount: '14 tbsp', recipes_id: 5, ingredient_id: 26 }, // flax seeds
        { amount: '14 tbsp', recipes_id: 5, ingredient_id: 27 }, // hemp seeds
        { amount: '14 tbsp', recipes_id: 5, ingredient_id: 28 }, // chia seeds
        { amount: '1 3/4 cups', recipes_id: 5, ingredient_id: 29 }, // raisins
        { amount: '7 tbsps', recipes_id: 5, ingredient_id: 30 }, // cinammon
        { amount: '3 1/2 cups', recipes_id: 5, ingredient_id: 31 }, // water

        //Pepperoni Pizza
        { amount: '1', recipes_id: 6, ingredient_id: 32 }, //pizza dough
        { amount: '1 cup', recipes_id: 6, ingredient_id: 16 }, // pizza sauce
        { amount: '1 cup', recipes_id: 6, ingredient_id: 4 },// shredded cheese
        { amount: '1/2 pack', recipes_id: 6, ingredient_id: 17 }, //pepperonis
        { amount: '1 cup', recipes_id: 6, ingredient_id: 13 }, // onions
        { amount: '3 tbsp', recipes_id: 6, ingredient_id: 33 }, // italian seasoning

        //Traditional Stir-fry
        { amount: '4 cups', recipes_id: 7, ingredient_id: 34 }, // rice
        { amount: '8 cups', recipes_id: 7, ingredient_id: 31 }, //water
        { amount: '4', recipes_id: 7, ingredient_id: 1 }, // chicken breast
        { amount: '1 large', recipes_id: 7, ingredient_id: 13 }, // onion
        { amount: '1 large', recipes_id: 7, ingredient_id: 14 },//green bell pepper
        { amount: '1 large', recipes_id: 7, ingredient_id: 20 }, // red bell pepper
        { amount: '4 tbsp', recipes_id: 7, ingredient_id: 9 }, //chicken seasoning
        { amount: '16 cloves', recipes_id: 7, ingredient_id: 21 },// garlic
        { amount: '4 tbsp', recipes_id: 7, ingredient_id: 35 } //avocado oil
      ]);
    });
};
