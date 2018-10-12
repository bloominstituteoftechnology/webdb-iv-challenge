exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('ingredients').insert([
        { id: 1, amount: 'chicken breast(s)', q_id: 3 },
        { id: 2, amount: 'drumstick(s)', q_id: 3 },
        { id: 3, amount: 'beef', q_id: 4 },
        { id: 4, amount: 'chicken breasts, shredded', q_id: 4 },
        { id: 5, amount: 'lemon', q_id: 1 },
        { id: 6, amount: "Trader Joe's Four Cheese Pizza", q_id: 1 },
        { id: 7, amount: 'shredded cheese', q_id: 4 },
        { id: 8, amount: 'pizza dough', q_id: 5 },
        { id: 9, amount: 'shredded bbq chicken', q_id: 4 },
      ]);
    });
};
