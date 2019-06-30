exports.seed = function(knex, Promise) {
  return knex('ingredients').truncate()
    .then(() => {
      return knex('ingredients').insert([
        {name: 'all-purpose flour'},  // 1
        {name: 'wheat flour'},        // 2
        {name: 'baking powder'},      // 3
        {name: 'sugar'},              // 4
        {name: 'canola oil'},         // 5
        {name: 'cool water'},         // 6
        {name: 'salt'},               // 7
        {name: 'cereal'},             // 8
        {name: 'almond milk'},        // 9
        {name: 'vegan cheese'},       // 10
        {name: 'water crackers'},     // 11
        {name: 'garlic'},             // 12
        {name: 'kale'},               // 13
        {name: 'toasted walnuts'},    // 14
        {name: 'lemon juice'},        // 15
        {name: 'fine-grain sea salt'}, // 16
        {name: 'ground pepper'},      // 17
        {name: 'red pepper flakes'},  // 18
        {name: 'extra-virgin olive oil'},// 19
        {name: 'spaghetti'},          // 20
        {name: 'red onion'},          // 21
        {name: 'whole peeled tomatoes'},// 22
        {name: 'dried oregano'},      // 23
        {name: 'dried basil'},        // 24
        {name: 'smoked paprika'},     // 25
        {name: 'kosher salt'},        // 26
        {name: 'light coconut milk'}  // 27
      ]);
    });
};
