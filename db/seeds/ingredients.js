
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {name: 'flour'},
        {name: 'sugar'},
        {name: 'pumpkin pie spice'},
        {name:'baking soda'},
        {name: 'salt'},
        {name: 'eggs'},
        {name: 'canned pumpkin puree'},
        {name: 'vegetable oil'},
        {name: "cored and chopped apple"},
        {name: 'ground cinnamon'},
        {name: 'butter'},
        {name: 'fresh rosemary'},
        {name: 'cloves garlic'},
        {name: 'zested lemon'},
        {name: 'fresh lemon juice'},
        {name: 'skinless boneless chicken breast halves'},
        {name: 'pepper'}

      ]);
    });
};
