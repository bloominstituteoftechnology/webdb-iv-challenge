exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("instructions")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("instructions").insert([
        {
          instruction_array: `[
            "Preheat oven to 350 degrees F and grease a (8 or 9 inch) pie plate or cake pan.",
            "Cream the butter and sugars together for 2 minutes and then mix in the egg, egg yolk, and vanilla.",
            "Add the dry ingredients and mix until combined. Use a wooden spoon to mix in all but 2 tablespoons of chocolate chips and then press the cookie dough into the pie plate. Sprinkle the remaining 2 tablespoons chocolate chips on top and press them down slightly.",
            "Bake for 22-25 minutes. Let the cookie cool completely and then run a sharp knife along the edge to loosen and then use a large spatula (or two!) to transfer to a platter. Pipe on frosting along the edges and add the sprinkles.",
            "Beat all the frosting ingredients together until smooth, adding milk as needed. Place into a piping bag fitted with a 1M tip. Pipe on frosting. Sprinkle on the sprinkles."
          ]`,
          recipe_id: 1
        },
        {
          instruction_array: `[
            "Beat egg, vanilla and cinnamon in shallow dish. Stir in milk.",
            "Dip bread in egg mixture, turning to coat both sides evenly.",
            "Cook bread slices on lightly greased nonstick griddle or skillet on medium heat until browned on both sides. Serve with Easy Spiced Syrup (recipe follows), if desired.",
            "Easy Spiced Syrup: Add 1 teaspoon McCormick® Pure Vanilla Extract and 1/4 teaspoon McCormick® Ground Cinnamon to 1 cup pancake syrup; stir well to mix. Serve warm, if desired."
          ]`,
          recipe_id: 2
        },
        {
          instruction_array: `[
            "Melt the butter, sugar and vanilla in a medium-sized saucepan.",
            "Remove from the heat.",
            "Add mashed bananas and stir through until just combined",
            "Add egg and mix well. Stir in the flour, then pour in the milk and fold in lightly.",
            "Bake at 170C for approximately 40 minutes."
          ]`,
          recipe_id: 3
        }
      ]);
    });
};
