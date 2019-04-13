
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        { name: 'Veggie Pizza', dishId: 1 }, //1
        { name: 'Meat Pizza', dishId: 1 },   //2
        { name: 'Veggie Soup', dishId: 2 },  //3
        { name: 'Meat Soup', dishId: 2 },    //4
        { name: 'Veggie Burger', dishId: 3 }, //5
        { name: 'Meat Burger', dishId: 3 }  //6
      ]);
    });
};
