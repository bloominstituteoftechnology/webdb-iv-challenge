
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        { Ingredient_name: 'Meat', amount: 1, unit: 'cup', recipes_id: 1 },
        { Ingredient_name: 'Chocolate', amount: 3.5, unit: 'cups', recipes_id: 2 },
        { Ingredient_name: 'Cream Cheese', amount: 3, unit: 'cups', recipes_id: 4 },
        { Ingredient_name: 'Meat', amount: 4, unit: 'cups', recipes_id: 5 },
        { Ingredient_name: 'Apples', amount: 1, unit: 'cup', recipes_id: 3 },
        { Ingredient_name: 'Beans', amount: 3, unit: 'cups', recipes_id: 1 },
        { Ingredient_name: 'Pumpkin', amount: 10, unit: 'cups', recipes_id: 6 },
        { Ingredient_name: 'Onions', amount: 10, unit: 'Tbsps', recipes_id: 1 },
        { Ingredient_name: 'Vanilla', amount: 3, unit: 'Tsps', recipes_id: 2 },
        { Ingredient_name: 'Cream Cheese', amount: 1.5, unit: 'Tbsps', recipes_id: 5 },
        { Ingredient_name: 'Flour', amount: 4.5, unit: 'cups', recipes_id: 6 },
        { Ingredient_name: 'Sugar', amount: 1, unit: 'cup', recipes_id: 3 },
        { Ingredient_name: 'Shredded Cheese', amount: 3, unit: 'cups', recipes_id: 1 },
        { Ingredient_name: 'Tortillas', amount: 10, unit: 'slices', recipes_id: 5 },
        { Ingredient_name: 'Tortillas', amount: 15, unit: 'slices', recipes_id: 1 }
      ]);
    });
};
