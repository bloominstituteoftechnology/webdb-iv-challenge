
exports.up = function(knex, Promise) {
    return knex.schema.createTable('ingredients', tbl => {
        tbl.increments();
        tbl.integer('recipe_id').unsigned().reference('id').inTable('recipe');
        tbl.float('quantity').notNullable();
        tbl.string('ingredient', 255).notNullable();
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.DropTableIfExists('ingredients');
  };
  