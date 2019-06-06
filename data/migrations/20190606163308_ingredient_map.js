exports.up = function(knex, Promise) {
    return knex.schema.createTable('ingredient_map', function(tbl)
    {
        tbl.increments("id");
        tbl.integer("recipie_id").notNullable().references('id').inTable('recipies').onDelete('CASCADE');
        tbl.integer("ingredient_id").notNullable().references('id').inTable('ingredients').onDelete('CASCADE');
        tbl.float("quantity").notNullable();
        tbl.timestamp('createdAt').defaultTo(knex.fn.now());
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('ingredient_map');
  };
  