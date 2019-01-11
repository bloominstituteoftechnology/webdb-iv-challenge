
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
 
return knex('instructions').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('instructions').insert([
        { name: 'Steak Dish', steps:JSON.stringify(['Brown Ground Beef', 'Warm Taco Shells', 'Put Together Taco']),ingredients:JSON.stringify(['16 oz T-Bone','Butter'])},
        { name: 'Deep Dish Pizza', steps:JSON.stringify(['Roll Pizza Dough', 'Bake @ 450 for 30 minutes', 'Cut Into 8 Slices']),ingredients:JSON.stringify(['Dough', 'Sauce','Pepperoni'])},
        { name: 'Tex-Mex Tacos', steps: JSON.stringify(['Brown Ground Beef', 'Warm Taco Shells', 'Put Together Taco']), ingredients:JSON.stringify(['Ground Beef', 'Lettuce','Cheese'])},
      ]);
    });
};
