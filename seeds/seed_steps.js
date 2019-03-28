exports.seed = knex => knex('steps')
  .del()
  .then(() => knex('steps').insert([
    { stepNumber: 1, recipeId: 1, description: 'Follow your instincts.' },
    { stepNumber: 2, recipeId: 1, description: 'Follow your instincts.' },
    { stepNumber: 3, recipeId: 1, description: 'Follow your instincts.' },
    { stepNumber: 1, recipeId: 2, description: 'Prevaricate.' },
    { stepNumber: 1, recipeId: 3, description: 'Shuck.' },
    { stepNumber: 2, recipeId: 3, description: 'Jive.' },
  ]));
