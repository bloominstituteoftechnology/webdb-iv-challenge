
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('instructions').del()
    .then(function () {
      // Inserts seed entries
      return knex('instructions').insert([
        {step:1,name:'put lemon on chicken',recipe_id:1},
        {step:1,name:'put bbq sauce on hot dog',recipe_id:2}
      ]);
    });
};
