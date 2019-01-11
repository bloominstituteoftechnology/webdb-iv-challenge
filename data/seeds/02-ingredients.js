
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {id: 1, name: 'tbsp Olive Oil'},
        {id: 2, name: 'heads of Red Cabbage'},
        {id: 3, name: 'Green Bell Peppers'},
        {id: 4, name: 'Carrots'},
        {id: 5, name: 'Onions'},
        {id: 6, name: 'cups Noodles'},
        {id: 7, name: 'cups Soy Sauce'},
        {id: 8, name: 'tbsp Sugar'},
        {id: 9, name: 'tsp Sriracha Sauce'},
        {id: 10, name: 'tbsp Corn Starch'},
        {id: 11, name: 'stalks Green Onions'},
        {id: 12, name: 'cups Raw Cashews'},
        {id: 13, name: 'oz Elbow Macaroni'},
        {id: 14, name: 'Potatoes'},
        {id: 15, name: 'cups Soy Milk'},
        {id: 16, name: 'cups Vegetable Broth'},
        {id: 17, name: 'tsp Onion Powder'},
        {id: 18, name: 'tsp Salt'},
        {id: 19, name: 'tsp Paprika'},
        {id: 20, name: 'tbsp Nutritional Yeast'},
        {id: 21, name: 'tbsp Tapioca Flour'},
        {id: 22, name: 'tbsp Lemon Juice'},
        {id: 23, name: 'Garlic Cloves'},
        {id: 24, name: 'tbsp Margarine'},
        {id: 25, name: 'Bananas'},
        {id: 26, name: 'cups Flour'},
        {id: 27, name: 'tsp Baking Soda'},
      ]);
    });
};
