
exports.up = function(knex, Promise) {
  return knex.schema.createTable('ingredients_measurement', table => {
    table.increments();
    table.integer('ingredients_id').references('id').inTable('ingredients');
    table.float('quantity').notNullable();
    table.text('measurement').notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('ingredients_measurement');
};
