
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('instructions')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('instructions').insert([
        { instruction: 'Add sea salt' } ,
        { instruction: 'Add flour' }, 
        { instruction: 'Add onion' }, 
        { instruction: 'Add black pepper' },
        { instruction: 'Add avocado' }, 
        { instruction: 'Add garlic salt' },
        { instruction: 'Add seasoning' }, 
        { instruction: 'Add mushrooms' }, 
        { instruction: 'Add bell peppers' },
        { instruction: 'Add pork meat' }, 
        { instruction: 'Add meat' },
        { instruction: 'Get three eggs' },
        { instruction: 'Get 3 ham slices' },
        { instruction: 'Get chicken' }, 
        { instruction: 'Get meat' },
        { instruction: 'Get pork meat' }, 
        { instruction: 'Cook 3 corn tortillas' },
        { instruction: 'Cook chicken' } ,
        { instruction: 'Cook until eggs are set' },
      ]);
    });
};
