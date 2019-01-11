
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipe').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipe').insert([
        {
          id: 1, 
          name: 'garlic butter rice',
          dish_id: 1,
          steps_id: 1,
          ingredients: {
            "garlic": {
              "id": 7,
              "quantity": 2.5
            },
            "vegetableOil": {
              "id": 20,
              "quantity": 3
            },
            "butter": {
              "id": 21,
              "quantity": 4
            },
            "whiteRice": {
              "id": 22,
              "quantity": 1.5
            },
            "chickenBroth": {
              "id": 16,
              "quantity": 2.5
            },
            "scallions": {
              "id": 23,
              "quantity": 1.5
            },
            "salt": {
              "id": 11,
              "quantity": 5.0
            },
            "whitePepper": {
              "id": 24,
              "quantity": 5.0
            }
          }
        },
        {
          id: 2, 
          name: 'creamy garlic chicken',
          dish_id: 2,
          steps_id: 2,
          ingredients: {
            "chickenBroth": {
              "id": 16,
              "quantity": 1.5
            },
            "chickenBreast": {
              "id": 13,
              "quantity": 2
            },
            "flour": {
              "id": 14,
              "quantity": 1
            },
            "olive oil": {
              "id": 15,
              "quantity": 1,
            },
            "butter": {
              "id": 21,
              "quantity": 2
            },
            "garlic": {
              "id": 7,
              "quantity": 1
            },
            "lemonJuice": {
              "id": 17,
              "quantity": 1.5
            },
            "whippingCream": {
              "id": 18,
              "quantity": 1
            },
            "salt": {
              "id": 11,
              "quantity": 5.0
            },
            "pepper": {
              "id": 12,
              "quantity": 5.0
            }
          }
        },
        {
          id: 3, 
          name: 'perfect pinto beans',
          dish_id: 3,
          steps_id: 3,
          ingredients: {
            "pintoBeans": {
              "id": 1,
              "quantity": 2.5
            },
            "chiliPowder": {
              "id": 2,
              "quantity": 2
            },
            "groundCumin": {
              "id": 3,
              "quantity": 1
            },
            "paprika": {
              "id": 4,
              "quantity": 1.5
            },
            "cayenne": {
              "id": 5,
              "quantity": 1.2
            },
            "bacon": {
              "id": 6,
              "quantity": 6
            },
            "garlic": {
              "id": 7,
              "quantity": 3
            },
            "bayLeaves": {
              "id": 8,
              "quantity": 2
            },
            "onion": {
              "id": 9,
              "quantity": 1
            },
            "pepper": {
              "id": 10,
              "quantity": 1
            },
            "salt": {
              "id": 11,
              "quantity": 5.0
            },
            "pepper": {
              "id": 10,
              "quantity": 5.0
            }
          }
        }
      ]);
    });
};
