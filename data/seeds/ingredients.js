
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('ingredients').insert([
        { recipes_id: 1, name: 'Beef Patty', quantity: 1 },
        { recipes_id: 1, name: 'Cheddar Cheese', quantity: 1 },
        { recipes_id: 1, name: 'Bacon', quantity: 2 },
        { recipes_id: 2, name: 'Beef Patty', quantity: 1 },
        { recipes_id: 2, name: 'Onion Ring', quantity: 1 },
        { recipes_id: 2, name: 'BBQ sauce', quantity: 1.5 },
        { recipes_id: 3, name: 'Black Bean Patty', quantity: 1 },
        { recipes_id: 3, name: 'Lettuce', quantity: 2 },
        { recipes_id: 3, name: 'Tomato', quantity: 2 },
        { recipes_id: 3, name: 'Onion', quantity: 2 },
        { recipes_id: 4, name: 'Cheese Ravioli', quantity: 12 },
        { recipes_id: 4, name: 'Marinara Sauce', quantity: 1 },
        { recipes_id: 5, name: 'Fettucine', quantity: 1 },
        { recipes_id: 5, name: 'Alfredo Sauce', quantity: 2 },
        { recipes_id: 6, name: 'Ziti', quantity: 1 },
        { recipes_id: 6, name: 'Ricotta Cheese', quantity: 1 },
        { recipes_id: 6, name: 'Mozarella Cheese', quantity: 1 },
        { recipes_id: 6, name: 'Fontina Cheese', quantity: 1 },
        { recipes_id: 6, name: 'Romano Cheese', quantity: 1 },
        { recipes_id: 6, name: 'Parmesan', quantity: 1 },
        { recipes_id: 7, name: 'Chicken Breast', quantity: 1 },
        { recipes_id: 7, name: 'Flour', quantity: 3 },
        { recipes_id: 7, name: 'Spices', quantity: 2 },
        { recipes_id: 7, name: 'Oil', quantity: 4 },
        { recipes_id: 8, name: 'Chicken Breast', quantity: 1 },
        { recipes_id: 8, name: 'Carrots', quantity: 1 },
        { recipes_id: 8, name: 'Celery', quantity: 1 },
        { recipes_id: 8, name: 'Peas', quantity: 1 },
        { recipes_id: 8, name: 'Pie Crust', quantity: 1 },
        { recipes_id: 9, name: 'Chicken Breast', quantity: 1 },
        { recipes_id: 9, name: 'Lettuce', quantity: 1 },
        { recipes_id: 9, name: 'Tomato', quantity: 0.5 },
        { recipes_id: 9, name: 'Croutons', quantity: 0.5 },
        { recipes_id: 9, name: 'Avocado', quantity: 1 },
        { recipes_id: 9, name: 'Ranch Dressing', quantity: 2.5 }
      ]);
    });
};