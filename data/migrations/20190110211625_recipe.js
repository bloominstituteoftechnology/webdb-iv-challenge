
exports.up = function(knex, Promise) {
    return knex.schema.createTable('recipe', table => {
        table.increments();
        table.string('name').notNullable();
        table.integer('amount_id').unsigned();
        table.foreign('amount_id').references('id').on('amount');
        table.integer('steps_id').unsigned();
        table.foreign('steps_id').references('id').on('steps');
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('recipe');
  };
  