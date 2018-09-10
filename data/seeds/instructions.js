
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('instructions').del()
    .then(function () {
      // Inserts seed entries
      return knex('instructions').insert([
        {recipe_id: 1, step: '1', descript: 'break eggs'},
        {recipe_id: 1, step: '2', descript: 'beat eggs'},
        {recipe_id: 1, step: '3', descript: 'mix ingredients'},
        {recipe_id: 1, step: '4', descript: 'cook'},
        {recipe_id: 2, step: '1', descript: 'break eggs'},
        {recipe_id: 2, step: '2', descript: 'beat eggs'},
        {recipe_id: 2, step: '3', descript: 'mix ingredients'},
        {recipe_id: 2, step: '4', descript: 'cook'},
        {recipe_id: 3, step: '1', descript: 'heat up pan'},
        {recipe_id: 3, step: '2', descript: 'mix in ingredients'},
        {recipe_id: 3, step: '3', descript: 'cook'},
        {recipe_id: 4, step: '1', descript: 'heat up pan'},
        {recipe_id: 4, step: '2', descript: 'mix in ingredients'},
        {recipe_id: 4, step: '3', descript: 'cook'},
        {recipe_id: 5, step: '1', descript: 'put patty on grill'},
        {recipe_id: 5, step: '2', descript: 'flip patty'},
        {recipe_id: 5, step: '3', descript: 'place cheese on patty'},
        {recipe_id: 5, step: '4', descript: 'assemble ingredients'},
        {recipe_id: 6, step: '1', descript: 'put breast on grill'},
        {recipe_id: 6, step: '2', descript: 'flip breast'},
        {recipe_id: 6, step: '3', descript: 'assemble ingredients'}
      ]);
    });
};
