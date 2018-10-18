exports.seed = function(knex, Promise) {
    return knex('recipes')
      .truncate()
      .then(function () {
        return knex('recipes').insert([
          {name: 'Supreme', dish_id: '1'},
          {name: 'Hawaiian', dish_id: '1'},
          {name: 'Meats', dish_id: '1'},
          {name: 'Beef', dish_id: '2'},
          {name: 'Chicken', dish_id: '2'},
          {name: 'Veggie', dish_id: '2'},
          {name: 'Angus', dish_id: '3'},
          {name: 'Buffalo', dish_id: '3'},
          {name: 'Vegetarian', dish_id: '3'},
        ]);
      });
  };