
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('steps').del()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        {id: 1, order: 1, directions: 'Preheat oven to 350 degrees F', recipe_id: 1},
        {id: 2, order: 2, directions: 'Mix everything together', recipe_id: 1},
        {id: 3, order: 3, directions: 'Throw it in a bread pan', recipe_id: 1},
        {id: 4, order: 1, directions: 'Boil a quart of water.', recipe_id: 2},
        {id: 5, order: 2, directions: 'Head sauce and meatballs in another pot', recipe_id: 2},
        {id: 6, order: 3, directions: 'Add noodles to boiling water and cook for 12 minutes', recipe_id: 2},
        {id: 7, order: 1, directions: 'Butter both sides of each slice of bread', recipe_id: 3},
        {id: 8, order: 2, directions: 'Heat griddle with more butter', recipe_id: 3},
        {id: 9, order: 3, directions: 'Toast the first side of the bread', recipe_id: 3},
      ]);
    });
};
