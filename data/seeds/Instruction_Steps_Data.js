
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('Instructions')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('Instructions').insert([
        // Cheese Pizza
        { Recipes_id: 1, step: 'Do the first thing' },
        { Recipes_id: 1, step: 'Do the second thing' },
        { Recipes_id: 1, step: 'Do the third and last thing' },

        // Pepperoni Pizza
        { Recipes_id: 2, step: 'Do the first thing' },
        { Recipes_id: 2, step: 'Do the second thing' },
        { Recipes_id: 2, step: 'Do the third and last thing' },

        // Meat Lovers Pizza
        { Recipes_id: 3, step: 'Do the first thing' },
        { Recipes_id: 3, step: 'Do the second thing' },
        { Recipes_id: 3, step: 'Do the third and last thing' },

        // Chicken Noodle Soup
        { Recipes_id: 4, step: 'Do the first thing' },
        { Recipes_id: 4, step: 'Do the second thing' },
        { Recipes_id: 4, step: 'Do the third and last thing' },
        // Veggie Soup
        { Recipes_id: 5, step: 'Do the first thing' },
        { Recipes_id: 5, step: 'Do the second thing' },
        { Recipes_id: 5, step: 'Do the third and last thing' },
        // Chili
        { Recipes_id: 6, step: 'Do the first thing' },
        { Recipes_id: 6, step: 'Do the second thing' },
        { Recipes_id: 6, step: 'Do the third and last thing' },

        // Regular Burger
        { Recipes_id: 7, step: 'Do the first thing' },
        { Recipes_id: 7, step: 'Do the second thing' },
        { Recipes_id: 7, step: 'Do the third and last thing' },

        // Cheese Burger
        { Recipes_id: 8, step: 'Do the first thing' },
        { Recipes_id: 8, step: 'Do the second thing' },
        { Recipes_id: 8, step: 'Do the third and last thing' },

        // Spicy Burger
        { Recipes_id: 9, step: 'Do the first thing' },
        { Recipes_id: 9, step: 'Do the second thing' },
        { Recipes_id: 9, step: 'Do the third and last thing' },

      ])
    })
}
