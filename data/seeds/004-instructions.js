exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('instructions').del().then(function () {
    // Inserts seed entries
    return knex('instructions').insert([
      {
        step: 1,
        recipe_id: 3,
        description:
          'In a small saucepan heat the butter, milk and salt until the butter is melted. Allow the mixture to cool until it is lukewarm.'
      },
      {
        step: 2,
        recipe_id: 3,
        description:
          'In a large bowl, stir together the flours, yeast, cardamom and sugar until combined. Make a well in the centre and crack in the eggs. Pour in the lukewarm milk mixture and stir everything together to form a sticky dough. You may have to use your hands as the dough becomes stiffer.'
      },
      {
        step: 3,
        recipe_id: 3,
        description:
          'Oil the work surface with a teaspoon of olive oil. Turn the dough out onto the oiled surface and knead vigorously for 5-8 minutes, using a plastic scraper as needed to prise the dough from the work surface. Don’t be tempted to add flour, as this will make the buns dry and tough. Keep kneading until the dough is considerably less sticky, smoother and more elastic. Shape into a ball, and put into a large, greased bowl. Cover the bowl with a clean tea towel and set aside in a warm place to prove for an hour, or until doubled in size.'
      },
      {
        step: 1,
        recipe_id: 1,
        description:
          'Meanwhile, for the filling and topping, mix the softened butter in a bowl with half the sugar and 1 tablespoon of cinnamon. Use a fork to mix the sugar and spice into the butter until it is completely combined. Mix the remaining sugar and cinnamon in a separate bowl and set aside.'
      }
    ])
  })
}
