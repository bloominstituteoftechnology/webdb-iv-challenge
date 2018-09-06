
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('instruction').del()
    .then(function () {
      // Inserts seed entries
      return knex('instruction').insert([
        { steps: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam iusto quos aliquid, necessitatibus minima quidem dicta, eligendi beatae nam quod totam repudiandae dolorum, porro quia modi ad fuga! Suscipit, recusandae?' }
      ]);
    });
};
