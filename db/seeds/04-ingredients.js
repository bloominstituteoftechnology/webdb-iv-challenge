
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {ingredient_name: 'cheese'},          //1
        {ingredient_name: 'pizza sause'},     //2
        {ingredient_name: 'pizza dough'},     //3
        {ingredient_name: 'oil'},             //4
        {ingredient_name: 'pepperoni'},       //5
        {ingredient_name: 'sausage'},         //6
        {ingredient_name: 'canadian bacon'},  //7
        {ingredient_name: 'ground beef'},     //8
        {ingredient_name: 'taco shell'},      //9
      ]);
    });
};
