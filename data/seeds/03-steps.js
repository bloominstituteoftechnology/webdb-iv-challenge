exports.seed = function(knex, Promise) {
    return knex('steps')
      .truncate()
      .then(function () {
        return knex('steps').insert([
          {recipe_id: '1', sequence: '1', step: 'Wash hands and vegetables'},
          {recipe_id: '1', sequence: '2', step: 'Preheat oven'},
          {recipe_id: '1', sequence: '3', step: 'Cut meats and vegetables'},
          {recipe_id: '7', sequence: '1', step: 'Warm up a pan'},
          {recipe_id: '7', sequence: '2', step: 'Season meat'},
          {recipe_id: '7', sequence: '3', step: 'Fry meat'},
        ]);
      });
  };