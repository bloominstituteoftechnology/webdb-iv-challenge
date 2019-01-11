
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('steps').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        {description: 'Preheat oven to 350°. ', order_num: 1, recipe_id: 1},
        {description: 'Drain artichoke hearts, reserving 1/4 cup of juices. Coarsely chop; combine with chicken, tortellini, mayonnaise, 1 cup cheese and reserved artichoke liquid. ', order_num: 2, recipe_id: 1},
        {description: 'Place artichoke mixture in a greased 13x9-in. baking dish; sprinkle with remaining cheese.', order_num: 3, recipe_id: 1},
        {description: 'Bake until bubbly and starting to brown, about 30 minutes.', order_num: 4, recipe_id: 1},


        {description: 'Preheat oven to 350°.', order_num: 1, recipe_id: 2},
        {description: 'Mix first five ingredients and 4 tablespoons green onions; transfer to a greased 1-1/2-qt. baking dish. ', order_num: 2, recipe_id: 2},
        {description: 'Sprinkle with cheese.', order_num: 3, recipe_id: 2},
        {description: 'Bake, covered, 20 minutes. Uncover; bake until bubbly and lightly browned, 15-20 minutes. ', order_num: 4, recipe_id: 2},
        {description: 'Sprinkle with remaining green onions. If desired, serve with lime wedges.', order_num: 5, recipe_id: 2},


        {description: 'Cook beef in 10-inch skillet over medium heat 8 to 10 minutes, stirring occasionally, until brown; drain.', order_num: 1, recipe_id: 3},
        {description: 'Stir salsa into beef. Heat to boiling, stirring constantly; reduce heat to medium-low. Cook 5 minutes, stirring occasionally. Pour beef mixture into large serving bowl.', order_num: 2, recipe_id: 3},
        {description: 'Heat taco shells as directed on package. Serve taco shells with beef mixture, lettuce, tomato and cheese.', order_num: 3, recipe_id: 3},

        {description: 'In a large skillet over medium heat, heat oil. ', order_num: 1, recipe_id: 4},
        {description: 'Season chicken with salt and pepper and add to skillet. ', order_num: 2, recipe_id: 4},
        {description: 'Cook until golden, 6 minutes. Add spices and stir until coated, 3 minutes more. ', order_num: 3, recipe_id: 4},
        {description: 'Build tacos: In tortillas, layer chicken and desired toppings. Serve with lime wedges.', order_num: 4, recipe_id: 4},
        
      ]);
    });
};
