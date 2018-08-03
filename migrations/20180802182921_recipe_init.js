
exports.up = function(knex, Promise) {
  return Promise.all([

    // Food Table => 1:many => food:dish
    knex.schema.createTable('food', function(table) {
      table.increments('id').primary();
      table.string('name');
      table.timestamps();
    }),

    //Dish Table => 1:many => dish:recipe
    knex.schema.createTable('dish', function(table){
      table.increments('id').primary();
      table.string('name');
      table.integer('food_id')
        .references('id')
        .inTable('food');
      table.timestamps();
    }),

    //Action Table => 1:many => action:recipe
    knex.schema.createTable('action', function(table){
      table.increments('id').primary();
      table.string('name');
      table.string('temp');
      table.string('time');
      table.timestamps();
    }),

    //Ingredients Table => 1:many => ingdnt:recipe
    knex.schema.createTable('ingdnt', function(table){
      table.increments('id').primary();
      table.string('name');
      table.timestamps();
    }),

    //Recipe Table => many:1 => recipe:dish
    //             => many:1 => recipe:action
    //             => many:1 => recipe:ingdnt
    knex.schema.createTable('recipe', function(table){
      table.increments('id').primary();
      table.integer('ingdnt_id')
        .references('id')
        .inTable('ingdnt');
      table.string('ingdnt_qty')
      table.integer('dish_id')
        .references('id')
        .inTable('dish');
      table.integer('action_id')
        .references('id')
        .inTable('action');
      table.timestamps();
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('recipe'),
    knex.schema.dropTable('ingdnt'),
    knex.schema.dropTable('action'),
    knex.schema.dropTable('dish'),
    knex.schema.dropTable('food'),
])
};
