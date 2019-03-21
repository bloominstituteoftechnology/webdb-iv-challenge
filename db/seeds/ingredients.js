
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {quantity: 1, name:'Lemon',recipe_id:1},
        {quantity:1,name:'pound of chicken',recipe_id:1},
        {quantity: 1, name: 'bottle of BBQ sauce',recipe_id:2},
        {quantity:10, name:'pounds of hot dogs',recipe_id:2}
      ]);
    });
};
