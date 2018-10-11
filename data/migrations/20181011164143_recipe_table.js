
exports.up = function(knex, Promise) {
    return knex.schema.createTable('recipe', tbl => {
        tbl.increment();
        tbl.integer('dish_id').unsigned().reference('id').inTable('dish');
        tbl.string('name', 255).notNullable();
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.DropTableIfExists('recipe');
  };
  