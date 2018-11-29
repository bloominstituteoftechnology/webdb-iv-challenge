
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('steps').del()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        {step: 1, recipeId: 1, instruction: 'rub flank steak with spices'},
        {step: 2, recipeId: 1, instruction: 'grill until medium rare'},
        {step: 3, recipeId: 1, instruction: 'chop and serve'},

        {step: 1, recipeId: 2, instruction: 'mix achiote spices and yogurt'},
        {step: 2, recipeId: 2, instruction: 'coat pork shoulder in achiote/yogurt mixture and seal in container for at lease 6 hours'},
        {step: 3, recipeId: 2, instruction: 'place on grill and smoke for 6 hours or until internal temperature is 190 F'},
        {step: 4, recipeId: 2, instruction: 'shred and serve'},

        {step: 1, recipeId: 3, instruction: 'slice mushrooms and drizzle marinade over strips'},
        {step: 2, recipeId: 3, instruction: 'saute 5-10 minutes until softened'},
        {step: 3, recipeId: 3, instruction: 'crumble queso fresco over sauteed mushrooms and serve'},
      ]);
    });
};
