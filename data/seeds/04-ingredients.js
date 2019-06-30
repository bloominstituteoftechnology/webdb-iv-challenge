exports.seed = function(knex, Promise) {
    return knex('ingredients')
      .truncate()
      .then(function () {
        return knex('ingredients').insert([
          {name: 'pepperoni'},
          {name: 'ground beef'},
          {name: 'green peppers'},
          {name: 'onions'},
          {name: 'tomatoes'},
          {name: 'mushrooms'},
        ]);
      });
  };