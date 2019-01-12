
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients_measurement').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients_measurement').insert([
        {
          id: 1, 
          ingredients_id: 7,
          quantity: 7,
          measurement: 'cloves',
          recipe_id: 1 
        },
        {
          id: 2, 
          ingredients_id: 20,
          quantity: 3,
          measurement: 'tablespoons',
          recipe_id: 1
        },
        {
          id: 3, 
          ingredients_id: 7,
          quantity: 2.5,
          measurement: 'teaspoons',
          recipe_id: 1
        },
        {
          id: 4,
          ingredients_id: 21,
          quantity: 4,
          measurement: 'tablespoons',
          recipe_id: 1
        },
        {
          id: 5,
          ingredients_id: 22,
          quantity: 2.5,
          measurement: 'cups',
          recipe_id: 1
        },
        {
          id: 6,
          ingredients_id: 16,
          quantity: 2.5,
          measurement: 'cups',
          recipe_id: 1
        },
        {
          id: 7,
          ingredients_id: 23,
          quantity: 1.5,
          measurement: 'cups',
          recipe_id: 1
        },
        {
          id: 8,
          ingredients_id: 11,
          quantity: 1,
          measurement: 'tablespoon',
          recipe_id: 1
        },
        {
          id: 9,
          ingredients_id: 24,
          quantity: 1,
          measurement: 'whole',
          recipe_id: 1
        },
        {
          id: 10,
          ingredients_id: 13,
          quantity: 2,
          measurement: 'large',
          recipe_id: 2
        }, 
        {
          id: 11,
          ingredients_id: 14,
          quantity: 1,
          measurement: 'as many as you need',
          recipe_id: 2
        },
        {
          id: 12,
          ingredients_id: 15,
          quantity: 1,
          measurement: 'tablespoon',
          recipe_id: 2
        }, 
        {
          id: 13,
          ingredients_id: 7,
          quantity: 1,
          measurement: 'whole head',
          recipe_id: 2
        },
        {
          id: 14,
          ingredients_id: 16,
          quantity: 0.5,
          measurement: 'cup',
          recipe_id: 2
        },
        {
          id: 15,
          ingredients_id: 17,
          quantity: 0.5,
          measurement: 'teaspoon',
          recipe_id: 2
        },
        {
          id: 16,
          ingredients_id: 7,
          quantity: 1.4,
          measurement: 'teaspoon',
          recipe_id: 2
        },
        {
          id: 17,
          ingredients_id: 18,
          quantity: 1,
          measurement: 'cup',
          recipe_id: 2
        },
        {
          id: 18,
          ingredients_id: 11,
          quantity: 1,
          measurement: 'As much as you like',
          recipe_id: 2
        },
        {
          id: 19,
          ingredients_id: 12,
          quantity: 1,
          measurement: 'As much as you like',
          recipe_id: 2
        },
        {
          id: 20,
          ingredients_id: 19,
          quantity: 1,
          measurement: 'chopped',
          recipe_id: 2
        },
        {
          id: 21,
          ingredients_id: 1,
          quantity: 1.5,
          measurement: 'pounds',
          recipe_id: 3
        },
        {
          id: 22,
          ingredients_id: 2,
          quantity: 2,
          measurement: 'teaspoon',
          recipe_id: 3
        },
        {
          id: 23,
          ingredients_id: 3,
          quantity: 1,
          measurement: 'teaspoon',
          recipe_id: 3
        },
        {
          id: 24,
          ingredients_id: 4,
          quantity: 1.5,
          measurement: 'teaspoon',
          recipe_id: 3
        },
        {
          id: 25,
          ingredients_id: 5,
          quantity: 1.4,
          measurement: 'teaspoon',
          recipe_id: 3
        },
        {
          id: 26,
          ingredients_id: 6,
          quantity: 3,
          measurement: 'slices',
          recipe_id: 3
        },
        {
          id: 27,
          ingredients_id: 7,
          quantity: 3,
          measurement: 'cloves',
          recipe_id: 3
        }, 
        {
          id: 28,
          ingredients_id: 8,
          quantity: 2,
          measurement: 'whole',
          recipe_id: 3
        },
        {
          id: 29,
          ingredients_id: 9,
          quantity: 1,
          measurement: 'medium',
          recipe_id: 3
        },
        {
          id: 30,
          ingredients_id: 10,
          quantity: 1,
          measurement: 'diced',
          recipe_id: 3
        },
        {
          id: 31,
          ingredients_id: 10,
          quantity: 1,
          measurement: 'as much as you like',
          recipe_id: 3
        }
      ]);
    });
};
