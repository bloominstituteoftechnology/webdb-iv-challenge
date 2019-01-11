
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('steps').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        /// Chocolate Chip Cookies
        { step_order: 1, explanation: 'Mix dry ingredients. Set aside.', recipe_id: 1 },
        { step_order: 2, explanation: 'Cream the butter and sugars.', recipe_id: 1 },
        { step_order: 3, explanation: 'Add eggs. Mix well.', recipe_id: 1 },
        { step_order: 4, explanation: 'Pour and mix in dry ingredients.', recipe_id: 1 },
        { step_order: 5, explanation: 'Add chocolate chips and mix.', recipe_id: 1 },
        { step_order: 6, explanation: 'Heat oven to 410 degrees Farenheit.', recipe_id: 1 },
        { step_order: 7, explanation: 'Weight cookies to desired size and put on pan.', recipe_id: 1 },
        { step_order: 8, explanation: 'Bake for 10 minutes. Adjust baking time according to size.', recipe_id: 1 },
        { step_order: 9, explanation: 'Let cool and clean kitchen.', recipe_id: 1 },
        { step_order: 10, explanation: 'Enjoy warm or congealed the following day.', recipe_id: 1 },
        { step_order: 11, explanation: 'Repeat when craving hits.', recipe_id: 1 },
        // Coconut Oatmeal Chocolate Chip Cookies
        { step_order: 1, explanation: 'Mix dry ingredients. Set aside.', recipe_id: 2 },
        { step_order: 2, explanation: 'Cream the butter and sugars.', recipe_id: 2 },
        { step_order: 3, explanation: 'Add eggs and coconut emulsion. Mix well.', recipe_id: 2 },
        { step_order: 4, explanation: 'Pour and mix in dry ingredients.', recipe_id: 2 },
        { step_order: 5, explanation: 'Add chocolate chips, shredded coconut, and rolled oats.', recipe_id: 2 },
        { step_order: 6, explanation: 'Heat oven to 410 degrees Farenheit.', recipe_id: 2 },
        { step_order: 7, explanation: 'Weight cookies to desired size and put on pan.', recipe_id: 2 },
        { step_order: 8, explanation: 'Bake for 10 minutes. Adjust baking time according to size.', recipe_id: 2 },
        { step_order: 9, explanation: 'Let cool and clean kitchen.', recipe_id: 2 },
        { step_order: 10, explanation: 'Enjoy warm or congealed the following day.', recipe_id: 2 },
        { step_order: 11, explanation: 'Repeat when craving hits.', recipe_id: 2 },
        // Ciabatta
        { step_order: 1, explanation: 'Mix all ingredients, except olive oil, in Bosch.', recipe_id: 3 },
        { step_order: 2, explanation: 'Let sit 5 minutes.', recipe_id: 3 },
        { step_order: 3, explanation: 'Add oil. Mix well in Bosch.', recipe_id: 3 },
        { step_order: 4, explanation: 'Remove and place in well oiled bowl. Perform an envelop fold. Let sit 10 minutes.', recipe_id: 3 },
        { step_order: 5, explanation: 'Repeat previous step 3 more times.', recipe_id: 3 },
        { step_order: 6, explanation: 'Set in fridge overnight to ferment and let rise.', recipe_id: 3 },
        { step_order: 7, explanation: 'Remove from firedge for one hour. After an hour, remove from bowl and shape. Let sit 1 more hour. Flip it over. Let sit another hour.', recipe_id: 3 },
        { step_order: 8, explanation: 'Heat oven to 550 degrees Farenheit. Add pan of water to bottom of oven to steam oven.', recipe_id: 3 },
        { step_order: 9, explanation: 'Once oven is heated, adjust temperature to 450 degrees farenheit. tighten freestanding loaves and put into oven to bake.', recipe_id: 3 },
        { step_order: 10, explanation: 'Bake for 12 minutes. After 12 minutes, rotate pan. Cook for another 15-20 minutes.', recipe_id: 3 },
        { step_order: 11, explanation: 'Check bottom of loaf by knocking on it. If it sounds hollow, it is done baking. Let it cool.', recipe_id: 3 },
        { step_order: 12, explanation: 'Clean kitchen.', recipe_id: 3 },
        { step_order: 13, explanation: 'Repeat when craving hits.', recipe_id: 3 },
        // French bread
        { step_order: 1, explanation: 'Combine 1.25 cup bread flour, .75 cup water, and tiny bit of yeast to create poolish. Let sit up to 12 hours. Shoud double in size.', recipe_id: 4 },
        { step_order: 2, explanation: 'Stir together salt and 1 tbsp salt in a bowl. Set aside.', recipe_id: 4 },
        { step_order: 3, explanation: 'Combine rest of water and yeast in Bosch. Mix to dissolve yeast.', recipe_id: 4 },
        { step_order: 4, explanation: 'Add rest of bread flour and poolish. Mix on low for 20-30 minutes to autolyse.', recipe_id: 4 },
        { step_order: 5, explanation: 'Add bowl previously set asie with water and salt.', recipe_id: 4 },
        { step_order: 6, explanation: 'Transfer to oiled bowl. Cover.', recipe_id: 4 },
        { step_order: 7, explanation: 'Let sit 1.5 hours. Perform a four-edge fold in the middle and at the end of that time.', recipe_id: 4 },
        { step_order: 8, explanation: 'Shape into baguettes and set on pan.', recipe_id: 4 },
        { step_order: 9, explanation: 'Let rest 35-40 minutes.', recipe_id: 4 },
        { step_order: 10, explanation: 'Heat oven to 470 degrees Farenheit. Add pan of water to bottom of oven to steam oven.', recipe_id: 4 },
        { step_order: 11, explanation: 'Once oven is heated, put into oven to bake.', recipe_id: 4 },
        { step_order: 12, explanation: 'Bake for 25 minutes. Rotate pan in middle of bake time.', recipe_id: 4 },
        { step_order: 13, explanation: 'Check bottom of loaf by knocking on it. If it sounds hollow, it is done baking. Let it cool.', recipe_id: 4 },
        { step_order: 14, explanation: 'Clean kitchen.', recipe_id: 4 },
        { step_order: 15, explanation: 'Repeat when craving hits.', recipe_id: 4 },

      ]);
    });
};
