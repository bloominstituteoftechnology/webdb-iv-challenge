
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        { dish_style: 'Carne asada tacos', dish_recipe: 'Carne asada, corn tortillas, avocado, onions, cilantro', dishes_id: '1'},
        { dish_style: 'Adobada tacos', dish_recipe: 'Pork meat, corn tortillas, avocado, onions, cilantro', dishes_id: '1'},
        { dish_style: 'Scramble eggs with ham', dish_recipe: 'eggs, ham', dishes_id: '2'},
        { dish_style: 'Scramble eggs with veggies', dish_recipe: 'eggs, mushrooms, onions, bell peppers', dishes_id: '2'},
        { dish_style: 'Fried chicken', dish_recipe: 'chicken, flour, garlic salt, black pepper, seasoning', dishes_id: '3'},
        { dish_style: 'Grilled chicken', dish_recipe: 'chicken, sea salt, black pepper', dishes_id: '3'},
      ]);
    });
};
