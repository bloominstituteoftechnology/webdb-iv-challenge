
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('Recipes_Ingrediants')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('Recipes_Ingrediants').insert([
        // Cheese Pizza
        { Recipes_id: 1, Ingrediants_id: 1, quantity: 2 },
        { Recipes_id: 1, Ingrediants_id: 2, quantity: 4 },
        { Recipes_id: 1, Ingrediants_id: 3, quantity: 3 },

        // Pepperoni Pizza
        { Recipes_id: 2, Ingrediants_id: 1, quantity: 2 },
        { Recipes_id: 2, Ingrediants_id: 2, quantity: 4 },
        { Recipes_id: 2, Ingrediants_id: 3, quantity: 3 },
        { Recipes_id: 2, Ingrediants_id: 4, quantity: 2 },

        // Meat Lovers Pizza
        { Recipes_id: 3, Ingrediants_id: 1, quantity: 2 },
        { Recipes_id: 3, Ingrediants_id: 2, quantity: 4 },
        { Recipes_id: 3, Ingrediants_id: 3, quantity: 3 },
        { Recipes_id: 3, Ingrediants_id: 4, quantity: 2 },

        // Chicken Noodle Soup
        { Recipes_id: 4, Ingrediants_id: 6, quantity: 1 },
        { Recipes_id: 4, Ingrediants_id: 7, quantity: 3 },
        { Recipes_id: 4, Ingrediants_id: 8, quantity: 2 },

        // Veggie Soup
        { Recipes_id: 5, Ingrediants_id: 7, quantity: 2 },
        { Recipes_id: 5, Ingrediants_id: 8, quantity: 3 },
        { Recipes_id: 5, Ingrediants_id: 9, quantity: 2 },
        { Recipes_id: 5, Ingrediants_id: 10, quantity: 2 },


        // Chili
        { Recipes_id: 6, Ingrediants_id: 5, quantity: 2 },
        { Recipes_id: 6, Ingrediants_id: 3, quantity: 4 },
        { Recipes_id: 6, Ingrediants_id: 11, quantity: 3 },
        { Recipes_id: 6, Ingrediants_id: 12, quantity: 3 },

        // Regular Burger
        { Recipes_id: 7, Ingrediants_id: 12, quantity: 2 },
        { Recipes_id: 7, Ingrediants_id: 5, quantity: 4 },
        { Recipes_id: 7, Ingrediants_id: 14, quantity: 2 },
        { Recipes_id: 7, Ingrediants_id: 3, quantity: 2 },

        // Cheese Burger
        { Recipes_id: 7, Ingrediants_id: 12, quantity: 2 },
        { Recipes_id: 7, Ingrediants_id: 5, quantity: 4 },
        { Recipes_id: 7, Ingrediants_id: 14, quantity: 2 },
        { Recipes_id: 7, Ingrediants_id: 3, quantity: 2 },
        { Recipes_id: 7, Ingrediants_id: 2, quantity: 1 },

        // Spicy Burger
        { Recipes_id: 7, Ingrediants_id: 12, quantity: 2 },
        { Recipes_id: 7, Ingrediants_id: 5, quantity: 4 },
        { Recipes_id: 7, Ingrediants_id: 14, quantity: 2 },
        { Recipes_id: 7, Ingrediants_id: 3, quantity: 2 },
        { Recipes_id: 7, Ingrediants_id: 11, quantity: 3 },

      ])
    })
}
