
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('instructions').del()
    .then(function () {
      // Inserts seed entries
      return knex('instructions').insert([
        //=== Different kinds of recipes with all these ingredients ====
          //----Meat Lover's Pizza----
          { recipe_id: 1, step: 'Mix the dough with the flour.' },
          { recipe_id: 1, step: 'Make paste from the tomatoes.' },
          { recipe_id: 1, step: 'Spread the tomato paste on the dough.' },
          { recipe_id: 1, step: 'Put cheese on top.' },
          { recipe_id: 1, step: 'Put pepperoni, beef, and bacon on the cheese.' },
          { recipe_id: 1, step: 'Put it all in the oven.' },
          { recipe_id: 1, step: 'Set oven at 400 degrees for an hour.' },
          //----Vegetarian Pizza----
          { recipe_id: 2, step: 'Mix the dough with the flour.' },
          { recipe_id: 2, step: 'Make paste from the tomatoes.' },
          { recipe_id: 2, step: 'Spread the tomato paste on the dough.' },
          { recipe_id: 2, step: 'Put cheese on top.' },
          { recipe_id: 2, step: 'Put spinach on the cheese.' },
          { recipe_id: 2, step: 'Put in the oven.' },
          { recipe_id: 2, step: 'Set oven at 400 degrees for an hour.' },
          { recipe_id: 2, step: 'Take out of oven, let cool, then eat.' },
          //----Hawaiian Pizza----
          {recipe_id: 3, step: 'Mix dough with flour.'},
          {recipe_id: 3, step: 'Make a sauce from tomatoes.'},
          {recipe_id: 3, step: 'Spread the sauce evenly on the flattened dough.'},
          {recipe_id: 3, step: 'Put cheese on top.'},
          {recipe_id: 3, step: 'Put ham and pineapples on top of the cheese.'},
          {recipe_id: 3, step: 'Put pizza in oven at 400 degrees until done.'},
          {recipe_id: 3, step: 'Take out of oven, let cool, and eat.'},
          //----Beef Tacos----
          {recipe_id: 4, step: 'Lay out tortilla.'},
          {recipe_id: 4, step: 'Insert cooked beef into the tortilla.'},
          {recipe_id: 4, step: 'Apply onions sparingly.'},
          {recipe_id: 4, step: 'Put on cilantro.'},
          {recipe_id: 4, step: 'Pour salsa on top to taste.'},
          //----Chicken Tacos----
          {recipe_id: 5, step: 'Lay out tortilla.'},
          {recipe_id: 5, step: 'Insert cooked chicken into the tortilla.'},
          {recipe_id: 5, step: 'Apply onions sparingly.'},
          {recipe_id: 5, step: 'Put on cilantro.'},
          {recipe_id: 5, step: 'Pour salsa on top to taste.'},
          //----Chocolate cake----
          { recipe_id: 6, step: 'Add butter, sugar, and baking powder.' },
          { recipe_id: 6, step: 'Add chocolate on top.' },
          { recipe_id: 6, step: 'Set oven at 400 degrees for 2 hours.' },
          { recipe_id: 6, step: 'Take out of oven, let cool, then eat.' },
          //----Ice cream cake----
          { recipe_id: 7, step: 'Mix dough and flour together.' },
          { recipe_id: 7, step: 'Add baking powder.' },
          { recipe_id: 7, step: 'Set oven at 400 degrees for 2 hours.' },
          { recipe_id: 7, step: 'Take out of oven, let cool, then eat.' },
          { recipe_id: 7, step: 'Add ice cream on top.' },
      ]);
    });
};
