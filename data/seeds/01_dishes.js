
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('dishes').truncate()
  //use truncate instead of delete, resets the increments
    .then(function () {
      // Inserts seed entries
      return knex('dishes').insert([
        {dish_name: 'Ribollita'},
        {dish_name:'Arancini'},
        {dish_name: 'Lasagne'},
        {dish_name: 'Gelato'},
        {dish_name: 'Ciceri e Tria'},
        {dish_name: 'Pasta all\'Amatriciana '},
        {dish_name: 'Tiramisu'},
      ]);
    });
};
