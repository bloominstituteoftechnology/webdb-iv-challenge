
exports.up = function(knex, Promise) {
  return knex.schema.createTable('ingredients', function(table) {
    table
      .increments('id')
      .primary()
      .notNullable();
    
    table
      .string('name', 256)
      .notNullable();

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
      return knex.schema.createTable('recipes', function(table) {
          table
            .increments('id')
            .primary()
            .notNullable();
          
          table.integer('dish_id').unsigned();
          table
            .foreign('dish_id')
            .references('id')
            .inTable('dishes');

          table.integer('ingredient_id').unsigned();
          table
            .foreign('ingredient_id')
            .references('id')
            .inTable('ingredients');

          table
            .string('name', 256)
            .notNullable();

          table
            .integer('time_min')

          table
            .string('steps', 10240)    
      })
    })
  })
};

exports.down = function(knex, Promise) {
  knex.deleteTableIfExists('recipes');
  knex.deleteTableIfExists('ingredients');
  knex.deleteTableIfExists('dishes');  
};
