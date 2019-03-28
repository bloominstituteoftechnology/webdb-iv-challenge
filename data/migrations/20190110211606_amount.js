
exports.up = function(knex, Promise) {
  return knex.schema.createTable('amount', table => {
      table.increments();
      table.string('quantity').notNullable();
      table.integer('ingredient_id').unsigned();
      table.foreign('ingredient_id').references('id').on('ingredients');
      table.integer('steps_id').unsigned();
      table.foreign('steps_id').references('id').on('steps');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('amount');
};
