exports.up = function(knex, Promise) {
    return knex.schema.createTable('recipies', function(tbl)
    {
        tbl.increments("id");
        tbl.string('name', 255).unique('uq_recipies_name');
        tbl.integer("dish_id").notNullable().references('id').inTable('dishes').onDelete('CASCADE');
        tbl.string('instructions', 4095).notNullable();
        tbl.timestamp('createdAt').defaultTo(knex.fn.now());
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('recipies');
  };
  