
exports.up = function(knex, Promise) {
  return knex.schema.createTable('process', table=>{
      table.increments();
      table.string('step').notNullable();
      table.integer('instruction_id').unsigned();
      table.foreign('instruction_id').references('id')
        .on('instructions');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('process')
};
