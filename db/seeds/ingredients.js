
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {name: 'flour'},//1
        {name: 'sugar'},//2
        {name: 'pumpkin pie spice'},//3
        {name:'baking soda'},//4
        {name: 'salt'},//5
        {name: 'eggs'},//6
        {name: 'canned pumpkin puree'},//7
        {name: 'vegetable oil'},//8
        {name: "cored and chopped apple"},//9
        {name: 'ground cinnamon'},//10
        {name: 'butter'},//11
        {name: 'fresh rosemary'},//12
        {name: 'cloves garlic'},//13
        {name: 'zested lemon'},//14
        {name: 'fresh lemon juice'},//15
        {name: 'skinless boneless chicken breast halves'},//16
        {name: 'pepper'}//17

      ]);
    });
};
