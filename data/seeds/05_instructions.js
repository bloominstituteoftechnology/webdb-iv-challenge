
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('instructions').del()
    .then(function () {
      // Inserts seed entries
      return knex('instructions').insert([
        {step: 1, recipeId: 1, stepDescription: 'Rice cauliflower'},
        {step: 2, recipeId: 1, stepDescription: 'Remove as much water as possible'},
        {step: 3, recipeId: 1, stepDescription: 'Mix cauliflower with grated cheese'},
        {step: 1, recipeId: 2, stepDescription: 'Stop pretending it tastes like real pizza'},
        {step: 1, recipeId: 3, stepDescription: 'Brown turkey in skillet over medium heat'},
        {step: 1, recipeId: 4, stepDescription:'Rice Cauliflower'},

      ]);
    });
};
