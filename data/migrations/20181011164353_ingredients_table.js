
exports.up = function(knex, Promise) {
    return knex.schema.createTable('steps', tbl => {
        tbl.increment();
        tbl.integer('recipe_id').unsigned().reference('id').inTable('recipe');
        tbl.integer('order').unsigned();
        tbl.string('description', 255).notNullable();
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.DropTableIfExists('steps');
  };
  