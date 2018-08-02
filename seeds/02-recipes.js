exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('recipes').insert([
        {
          id: 1,
          name: 'chicken tacos',
          instructions:
            '1. get tortillas, 2. put chicken in, 3. cover with lettuce and cheese',
          d_id: 1,
        },
        {
          id: 2,
          name: 'beef tacos',
          instructions:
            '1. get tortillas, 2. put beef in, 3. cover with lettuce and cheese',
          d_id: 1,
        },
        {
          id: 3,
          name: 'cheese pizza',
          instructions: '1. throw it in the microwave',
          d_id: 2,
        },
        {
          id: 4,
          name: 'bbq chicken pizza',
          instructions: '1. scarf it down',
          d_id: 2,
        },
        {
          id: 5,
          name: 'bbq chicken',
          instructions:
            '1. fire up grill, 2. put chicken on grill, 3. eat when done',
          d_id: 3,
        },
        {
          id: 6,
          name: 'baked chicken',
          instructions:
            '1. put chicken breasts and legs in a pan, 2. brush with olive oil, salt, and pepper, 3. bake at 425 for 40 minutes or until 163 degrees, 4. enjoy',
          d_id: 3,
        },
        {
          id: 7,
          name: 'lemon chicken',
          instructions:
            '1. cover chicken breast with lemon juice, salt, and pepper, 2. cook until done',
          d_id: 3,
        },
      ]);
    });
};
