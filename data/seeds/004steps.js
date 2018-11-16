exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('steps').truncate().then(function () {
    // Inserts seed entries
    return knex('steps').insert([
      // meat lovers pizza
      { recipe_id: 1, step: 'Mix the dough with the flour.' },
      { recipe_id: 1, step: 'add pepperoni.' },
      { recipe_id: 1, step: 'add cheese' },
      
      { recipe_id: 2, step: 'put hotdog in bun' },
      { recipe_id: 2, step: 'add ketchup' }
    ])
  })
}