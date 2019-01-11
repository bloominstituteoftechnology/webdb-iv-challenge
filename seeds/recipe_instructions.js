
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipe_instructions').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipe_instructions').insert([
        {id: 1, instructions: 'Apply cheese to dough', order: 0, dish_id: 1, recipe_id: 1},
        {id: 2, instructions: 'Add all meat on top of cheese', order: 1, dish_id: 1, recipe_id: 1}
      ]);
    });
};

/*
table.increments('id');
table.float('qty');
table.string('instructions');
table.enu('uom', ['g', 'tbsp', 'tsp', 'cup', 'oz', 'fl oz', 'gal', 'l', 'lb']);
table.integer('order');
table.foreign('dish_id').notNullable().references('id').on('dishes');
table.foreign('ingredient_id').notNullable().references('id').on('ingredients');*/

/*return knex('recipes').insert([
    {id: 1, name: 'meat lovers', dish_id: 1},
    {id: 2, name: 'veggie', dish_id: 1},
    {id: 3, name: 'mediterranean', dish_id: 1},
    {id: 4, name: 'classic foot long', dish_id: 2},
    {id: 4, name: 'veggie', dish_id: 2},
    {id: 5, name: 'bacon blue cheese', dish_id: 3},
    {id: 6, name: 'cheese burger', dish_id: 3}
]);*/

/*return knex('ingredients').insert([
    {id: 1, name: 'sausage'},
    {id: 2, name: 'pepperoni'},
    {id: 3, name: 'artichoke heart'},
    {id: 4, name: 'garlic'},
    {id: 5, name: 'bell pepper'},
    {id: 6, name: 'red onion'},
    {id: 7, name: 'cheese'},
    {id: 8, name: 'sun dried tomato'},
    {id: 9, name: 'bun'},
    {id: 10, name: 'veggie dog'},
    {id: 11, name: 'beef'},
    {id: 12, name: 'blue cheese'},
    {id: 13, name: 'bacon'}
]);*/

/*
return knex('dishes').insert([
    {id: 1, name: 'pizza'},
    {id: 2, name: 'hot dog'},
    {id: 3, name: 'hamburger'}
]);*/
