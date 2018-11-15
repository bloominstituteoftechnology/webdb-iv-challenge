
exports.up = function(knex, Promise) {
    return knex.schema.createTable('recipes', tbl =>{
        tbl.increments('id');
        tbl.string('name', 128).unique().notNullable()
        tbl.integer('dish_id').unsigned().references('id').inTable('dish').notNullable()
    })
  };
  
  exports.down = function(knex, Promise) {
      return knex.schema.dropTableIfExists('recipes')
    
  };
  