exports.seed = function(knex, Promise) {
  return knex('instructions').truncate()
    .then(() => {
      return knex('instructions').insert([
        {recipe: 1, step: 'Sift dry ingredients together in a medium bowl.', stepNum: 1},
        {recipe: 1, step: 'Make a little hole in the middle of this mixture and pour in water then oil.', stepNum: 2},
        {recipe: 1, step: 'Stir just until wet.', stepNum: 3},
        {recipe: 1, step: 'Cook in waffle iron at preferred setting.', stepNum: 4},
        {recipe: 1, step: 'Serve with butter/margarine and syrup.', stepNum: 5},
        {recipe: 2, step: 'Pour cereal into a bowl.', stepNum: 1},
        {recipe: 2, step: 'Pour milk over the cereal.', stepNum: 2},
        {recipe: 3, step: 'Spread cheese on cracker.', stepNum: 1},
        {recipe: 3, step: 'Enjoy!', stepNum: 2},
        {recipe: 4, step: 'Make the pesto: In a food processor, add the peeled garlic cloves and process until the garlic is minced.', stepNum: 1},
        {recipe: 4, step: 'Add the kale, walnuts, lemon juice, salt and pepper.', stepNum: 2},
        {recipe: 4, step: 'Turn on the food processor and drizzle in the oil.', stepNum: 3},
        {recipe: 4, step: 'Process until the pesto reaches your desired consistency, stopping to scrape down the sides as necessary.', stepNum: 4},
        {recipe: 4, step: 'Taste and add more lemon, salt or pepper if necessary. (You can thin out the pesto with more oil, but if you’re serving with pasta, keep in mind that you can also thin it out with reserved pasta cooking water.)', stepNum: 5},
        {recipe: 4, step: 'Cook the pasta (optional): Bring a large pot of salted water to boil.', stepNum: 6},
        {recipe: 4, step: 'Add the pasta and cook until al dente, according to package directions.', stepNum: 7},
        {recipe: 4, step: 'Reserve one cup cooking liquid before draining the pasta.', stepNum: 8},
        {recipe: 4, step: 'Let the pasta and pasta water cool for a minute to make sure the high heat doesn’t damage the flax oil pesto.', stepNum: 9},
        {recipe: 5, step: 'Heat olive oil in a heavy-bottomed pot, over medium-low heat. When the pot is hot, add onions and cook for 6 to 8 minutes, until the onions are soft. Stir often to keep the onions from burning.', stepNum: 1},
        {recipe: 5, step: 'Add the entire can of whole tomatoes, including the liquid, and 1 cup of water. Using the back of a wooden spoon, gently smash the tomatoes. Add dried oregano, dried basil, paprika, and a pinch of kosher salt. Raise the heat to medium and bring everything to boil. Let soup simmer for 8 to 10 minutes. Turn off heat. Let the soup cool off for 5 minutes before transferring to a blender to blend.', stepNum: 2},
        {recipe: 5, step: 'Return soup to pot and stir in coconut milk.', stepNum: 3},
        {recipe: 5, step: 'Serve in bowls with black pepper, basil leaves, and cashew cream, if you like.', stepNum: 4},
      ]);
    });
};
