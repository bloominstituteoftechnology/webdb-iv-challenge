
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {recipe: "Cut potatoes, put into hot oil, ready when they get brown tint on ends, sprinkle salt on top.", dish_id: 16},
        {recipe: "Cut lettuce and other veggies, out into bowl, spinkle cheese on top, then drizzle dressing", dish_id: 17},
        {recipe: "Put butter in pan and let it melt, put fish fillets in an also chopped garlic, sear fish until bottom is brown", dish_id: 18}
      ]);
    });
};
