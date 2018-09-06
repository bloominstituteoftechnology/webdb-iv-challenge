
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {step:1,name:'put lemon on chicken',recipe_id:1},
        {step:1,name:'put bbq sauce on hot dog',recipe_id:2}
      ]);
    });
};
