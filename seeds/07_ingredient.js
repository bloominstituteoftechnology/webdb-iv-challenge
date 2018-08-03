
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredient').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredient').insert([
        {ingredient_id: 1, ingredient_name: "Paprika", link_to_more_info: 'http://www.google.com'},
        {ingredient_id: 2, ingredient_name: "Ground black pepper", link_to_more_info: 'http://www.google.com'},
        {ingredient_id: 3, ingredient_name: "Salt", link_to_more_info: 'http://www.google.com'},
        {ingredient_id: 4, ingredient_name: "Cayenne pepper", link_to_more_info: 'http://www.google.com'}
      ]);
    });
};
