
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {ingredient: 'Mozzerella Cheese'},
        {ingredient: 'Dough'},
        {ingredient: 'Pizza Sauce'},
        {ingredient: 'Tortilla Shells'},
        {ingredient: 'Ground Beef'},
        {ingredient: 'Taco Seasoning'},
        {ingredient: 'Shredded Cheese'},
        {ingredient: 'Bread'},
        {ingredient: 'Peanut Butter'},
        {ingredient: 'Jelly'},
      

     
      ]);
    });
};
