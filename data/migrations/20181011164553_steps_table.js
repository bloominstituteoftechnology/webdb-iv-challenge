
exports.up = function(knex, Promise) {
    return knex.schema.createTable('steps', tbl => {
        tbl.increments();
        tbl.integer('recipe_id').unsigned().references('id').inTable('recipe');
        tbl.integer('order').notNullable();
        tbl.string('description', 255).notNullable();
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.DropTableIfExists('steps');
  };
  