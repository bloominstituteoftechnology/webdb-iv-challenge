
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('stepstry').del()
    .then(function () {
      // Inserts seed entries
      return knex('stepstry').insert([
        {step:1, name:'Put Garlic on top of Salmon', recipes_id:1},
        {step:2, name:'Bake at 375 degrees for 15 minutes', recipes_id:1},
        {step:1, name:'Put BBQ sauce on Chicken', recipes_id:2},
        {step:2, name:'Bake for 25 minutes at 400 degrees', recipes_id:2},
      ]);
    });
};
