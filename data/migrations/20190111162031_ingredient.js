exports.up = function(knex, Promise) {
    return knex.schema.createTable('ingredient', table => {
        table.increments();
        table.string('ingredient').notNullable()
        table.float('quantity').notNullable();
       
    })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('ingredient');
};