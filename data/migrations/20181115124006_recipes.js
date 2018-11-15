
exports.up = function(knex, Promise) {
  return knex.schema.createTable('recipes', function(table) {
    table
      .increments('id')
      .primary()
      .notNullable();
    
    table
      .integer('dish_id');

    table
      .integer('ingredient_id');

    table
      .string('name', 256)
      .notNullable();

    table
      .integer('time_min')

    table
      .string('steps', 10240)

    

  }).then(function() {
  return knex.schema.createTable('dishes', function(table) {
    table
      .increments('id')
      .primary()
      .notNullable();
    
    table
      .string('name', 256)
      .notNullable();

  }).then(function() {
  return knex.schema.createTable('ingredients', function(table) {
    table
      .increments('id')
      .primary()
      .notNullable();
    
    table
      .string('name', 256)
      .notNullable();

  })

  })

  })
};

exports.down = function(knex, Promise) {
  knex.deleteTableIfExists('recipes');
  
};
