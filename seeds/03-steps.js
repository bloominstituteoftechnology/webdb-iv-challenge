
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('steps').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        {id: 1, instruction_id: 1, step: 'Beat the pizza doe like it owes you money.'},
        {id: 2, instruction_id: 1, step: 'Add red tomato liquid stuff'},
        {id: 3, instruction_id: 1, step: "Add cheese. If you think you added too much, you're wrong."},
        {id: 4, instruction_id: 2, step: 'Sing Spam Spam Spam Spam Spam...'},
        {id: 5, instruction_id: 3, step: 'Get bread X2'},
        {id: 6, instruction_id: 3, step: 'Get Jelly, and put it on bread.'},
        {id: 7, instruction_id: 3, step: 'Get penut butter, and put it on other bread.'}
      ]);
    });
};
