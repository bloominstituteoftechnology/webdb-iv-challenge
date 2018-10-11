exports.seed = knex => {
  knex('instructions')
    .truncate()
    .then(() => {
      knex('instructions').insert([
        { step_number: 1, step: 'Turn on grill', recipe_id: 1 },
        { step_number: 2, step: 'Clean grill', recipe_id: 1 },
        { step_number: 3, step: 'Make magic happen', recipe_id: 2 }
      ]);
    });
};
