exports.up = function(knex, Promise) {
    return knex.schema.createTable('recipe', table => {
        table.increments();
        table.string('name').notNullable().unique()
        table.string('ingredient').notNullable()
        table.float('quantity').notNullable();
        table.string('steps').notNullable();
        table.integer('dish_id').unsigned();
        table.foreign('dish_id').references('id').inTable('dish');
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('recipe')
  };