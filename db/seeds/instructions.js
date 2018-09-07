
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('instructions').del()
    .then(function () {
      // Inserts seed entries
      return knex('instructions').insert([
        {step: "In a food processor, thoroughly blend together the butter, rosemary, garlic, lemon zest, and lemon juice. Pour 1/3 of blended mixture into a small bowl for marinade. Cover remaining mixture, and set aside.", recipe_id:1 },
        {step: "Lightly season chicken breasts with salt and pepper. Rub chicken breasts with the marinade mixture. Place chicken breasts on a platter, cover, and refrigerate 3 hours.", recipe_id:1 },
        {step: "Preheat an outdoor grill for high heat and lightly oil grate. Pour half of the reserved rosemary and lemon mixture into a bowl for basting. Cover remaining mixture, and set aside for topping cooked chicken.", recipe_id:1 },
        {step: "Grill chicken breasts 4 minutes on each side, basting with rosemary and lemon basting mixture. Remove chicken breasts from grill, and top with small scoops of the remaining topping mixture.", recipe_id:1 },

        {step: "Preheat oven to 350 degrees F (175 degrees C). Lightly grease 18 muffin cups or use paper liners.", recipe_id: 2},
        {step: "In a large bowl, sift together 2 1/2 cups all-purpose flour, 2 cups sugar, pumpkin pie spice, baking soda and salt. In a separate bowl, mix together eggs, pumpkin and oil. Add pumpkin mixture to flour mixture; stirring just to moisten. Fold in apples. Spoon batter into prepared muffin cups.", recipe_id: 2},
        {step: "In a small bowl, mix together 2 tablespoons flour, 1/4 cup sugar and 1/2 teaspoon cinnamon. Cut in butter until mixture resembles coarse crumbs. Sprinkle topping evenly over muffin batter.", recipe_id: 2},
        {step: "Bake in preheated oven for 35 to 40 minutes, or until a toothpick inserted into a muffin comes out clean.", recipe_id: 2},
      ]);
    });
};
