
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        { name: 'Meat' },    //1
        { name: 'Veggie' },  //2
        { name: 'Cheese' },  //3
        { name: 'Broth' },   //4
        { name: 'Bun' },     //5
        { name: 'Dough' }    //6
      ]);
    });
};
