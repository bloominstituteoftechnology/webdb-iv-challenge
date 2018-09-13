exports.seed = function(knex, Promise) {
  return knex('recipes').del()
    .then(function () {
      return knex('recipes').insert([
        { name: 'birthday cake', dish_id: 3 },
        { name: 'yellow cake', dish_id: 3 },
        { name: 'poundcake', dish_id: 3 },
        { name: 'rice krispies', dish_id: 1 },
        { name: 'cocoa puffs', dish_id: 1 },
        { name: 'tex-mex tacos', dish_id: 2 },
        { name: 'granny\'s tacos', dish_id: 2 }
      ]);
    });
};