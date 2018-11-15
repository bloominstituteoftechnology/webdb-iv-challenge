
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('instructions').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('instructions').insert([
        // papa pizza
        {recipe_id: 1, step: 'mix flour'},
        {recipe_id: 1, step: 'add onion'},
        {recipe_id: 1, step: 'bake'},
        // domino pizza
        {recipe_id: 2, step: 'mix flour'},
        {recipe_id: 2, step: 'add salt'},
        {recipe_id: 2, step: 'mix bake'},
        // wonton soup
        {recipe_id: 3, step: 'mix flour'},
        {recipe_id: 3, step: 'add water'},
        {recipe_id: 3, step: 'add egg'},
        // bonless rib
        {recipe_id: 4, step: 'mix flour'},
        {recipe_id: 4, step: 'add beef'},
        {recipe_id: 4, step: 'add soy sauce'},
        // cjess pizza
        {recipe_id: 1, step: 'mix flour'},
        {recipe_id: 1, step: 'mix chess'},
        {recipe_id: 1, step: 'bake'},
      ]);
    });
};
