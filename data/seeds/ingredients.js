
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {id: 1, name: 'pinto beans'},
        {id: 2, name: 'chili powder'},
        {id: 3, name: 'ground cumin'},
        {id: 4, name: 'paprika'},
        {id: 5, name: 'cayenne'},
        {id: 6, name: 'bacon'},
        {id: 7, name: 'garlic'},
        {id: 8, name: 'bay leaves'},
        {id: 9, name: 'onion'},
        {id: 10, name: 'pepper'},
        {id: 11, name: 'salt'},
        {id: 12, name: 'pepper'},
        {id: 13, name: 'chicken breasts'},
        {id: 14, name: 'flour'},
        {id: 15, name: 'olive oil'},
        {id: 16, name: 'chicken broth'},
        {id: 17, name: 'lemon juice'},
        {id: 18, name: 'whipping cream'},
        {id: 19, name: 'parsley'},
        {id: 20, name: 'vegetable oil'},
        {id: 21, name: 'butter'},
        {id: 22, name: 'white rice'},
        {id: 23, name: 'scallions'},
        {id: 24, name: 'white pepper'},
      ]);
    });
};
