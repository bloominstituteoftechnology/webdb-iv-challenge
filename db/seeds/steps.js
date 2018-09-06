exports.seed = (knex, Promise) => {
  return knex('steps').truncate()
    .then(() => {
      return knex('steps').insert([
        { step: 'Get your eggs.', order: 1, recipe_id: 6 },
        { step: 'Crack those bad boys on a pan.', order: 2, recipe_id: 6 },
        { step: 'Stir \'em while you cook \'em.', order: 3, recipe_id: 6 }
      ]);
    });
};
